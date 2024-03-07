import {BlogCard} from "../components/blogCard";
import {Appbar} from "../components/Appbar";
import {useBlogs} from "../hooks";
import {BlogsSkeleton} from "../components/BlogsSkeleton";

export function Blogs() {
  const{loading, blogs} = useBlogs();
  if(loading){
    return (
      <div>
        <Appbar/>
        <BlogsSkeleton />
        <BlogsSkeleton />
        <BlogsSkeleton />
      </div>
    )
  }
  return (
    <div>
      <Appbar/>
      {blogs.map(blog =>
      <BlogCard id={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={"2nd Feb 2024"} />
      )}
    </div>
  )
}
