import {Hono} from "hono";
import { verify } from 'hono/jwt'
import {PrismaClient} from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate';
import { createPostInput, updatePostInput } from '@udayprakash80/common-medium';

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
    userId: string
  }
}>();

blogRouter.use('/*', async (c, next) => {
  const jwt = c.req.header('Authorization') || "";
  if (!jwt) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  const token = jwt.split(' ')[1];
  try{
    const user = await verify(token, c.env?.JWT_SECRET);
    if(user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "You are not logged in"
      });
    }
  } catch(e){
    c.status(403);
    return c.json({
      message: "You are not logged in"
    });
  }

})

blogRouter.get('/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL	,
  }).$extends(withAccelerate());
  const posts = await prisma.post.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: {
          name: true
        }
      }
    }
  });
  return c.json(posts);
})
blogRouter.post('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const userId = c.get('userId');
  const {success } = createPostInput.safeParse(body);
  if(!success){
    c.status(403);
    return c.json({error: 'Invalid Input'});
  }

  try{
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId
      }
    });

    if(post){
      console.log(post);
      return c.json({
        id: post.id
      })
    } else {
      return c.json(
        {
          message: 'Error while creating blog'
        }
      )
    }

  } catch(e){
    return c.status(403);
  }
});

blogRouter.put('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const userId = c.get('userId');
  const {success } = updatePostInput.safeParse(body);
  if(!success){
    c.status(403);
    return c.json({error: 'Invalid Input'});
  }
  try{
      const post = await prisma.post.update({
        where: {
          id: body.id,
          authorId: userId
      },
        data: {
          title: body.title,
          content: body.content,
          published: body.published
        }
    });
      if(post){
        return c.text('Updated post')
      } else {
        c.status(403);
        return c.json({message: 'failed to update'})
      }

  } catch(e){
    return c.status(403);
  }
});

blogRouter.get('/:id', async (c) => {
  const id = c.req.param('id');
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true
          }
        }
      }
    });
    return c.json(post);
  } catch(e){
    c.status(403);
  }
});





