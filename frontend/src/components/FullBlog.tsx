import {Avatar} from "./blogCard";
import {Blog} from "../interface";

export const FullBlog = ({blog}: {blog: Blog}) => {
  return (
    <div>
      <div className="flex justify-center pt-10">
        <div className="w-5/6">
          <div className="grid grid-cols-4">
            <div className="col-span-3">
              <div>
                <div className="text-8xl font-bold">
                  {blog.title}
                </div>
                <div className="pt-5 text-slate-500">
                  Posted On
                </div>
                <div className="pt-7">
                  {blog.content}
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div> Author</div>
              <div className="flex pt-5">
                <div className="">
                  <Avatar name={blog.author.name}/>
                </div>
                <div className="pl-3">
                  <div>{blog.author.name || "Anonymous"}</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
