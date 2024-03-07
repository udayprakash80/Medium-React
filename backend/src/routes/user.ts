import {Hono} from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
import { signUpInput, signInInput } from '@udayprakash80/common-medium';

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();

userRouter.post('/signup', async (c) => {
  // const databaseUrl = c.env?.DATABASE_URL;
  // console.log(databaseUrl);
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = signUpInput.safeParse(body);
  if(!success){
    c.status(400);
    return c.json({message: 'Invalid Input'});
  }
  try{

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name
      }
    });
    const token = await sign({id: user.id}, c.env?.JWT_SECRET);
    return c.text(token)
  } catch (e){
    c.status(403);
    return c.text(e);
  }
  return c.text('Hello signup post!')
})

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = signInInput.safeParse(body);
  if(!success){
    c.status(400);
    return c.json({message: 'Invalid Input'});
  }
  try{
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    });
    if(!user){
      c.status(403)
      return c.json({error: 'user not found'});
    }
    const token = await sign({id: user?.id}, c.env?.JWT_SECRET);
    return c.text(token);
  }catch (e){
    c.status(403);
    return c.json({ error: "error while signing in" });
  }
})
