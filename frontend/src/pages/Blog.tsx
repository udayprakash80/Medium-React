import {useBlog} from "../hooks";
import {useParams} from "react-router-dom";
import {FullBlog} from "../components/FullBlog";
import {Appbar} from "../components/Appbar";
import {BlogSkeleton} from "../components/BlogSkeleton";

export const Blog = () => {
  const {id} = useParams();
  const{loading, blog} = useBlog({
    id: id || ""
  });
  if(loading){
    return (
      <div>
        <Appbar />
        <BlogSkeleton/>
      </div>
    )
  }


    return (
    <div>
      <Appbar />
      <FullBlog blog={blog}/>
    </div>
  )
}
