import {Avatar} from "./blogCard";
import {Link} from "react-router-dom";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="flex flex-col justify-center text-3xl">
        <Link to={"/blogs"}>Medium</Link>
      </div>
      <div>
        <Link to={"/publish"}>
          <button type="button"
                  className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Post Blog
          </button>
        </Link>
        <Avatar name="Udaya"></Avatar>
      </div>
    </div>
  )
}
