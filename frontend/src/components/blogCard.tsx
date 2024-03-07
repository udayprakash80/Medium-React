import {BlogCardProps} from "../interface";
import {Link} from "react-router-dom";

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="flex justify-center pt-10">
      <div className="w-5/6">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div className="flex">
              <div>
                <Avatar name={authorName} />
              </div>
              <div className="font-extralight pl-2">
                {authorName}
              </div>
              <div className="pl-1 pr-1 text-xx">
                &#9679;
              </div>
              <div className="text-slate-500 font-medium">
                {publishedDate}
              </div>
            </div>

            <div className="pt-3 text-lg text-black font-semibold">
              {title}
            </div>
            <div className="pt-2 text-slate-500">
              {content.slice(0, 200) + "..."}
            </div>
            <div className="pt-5 pb-5">
              {`${Math.ceil(content.length / 100)} min read`}
            </div>
          </div>

          <div className="border">
            udaya
          </div>
        </div>
        <div className="border-b-2 h-1 w-full">
        </div>
      </div>
    </div>
    </Link>
  )
}

export const Avatar = ({name}: {name: string}) => {
  return (
      <div
        className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
      </div>
  )
}
