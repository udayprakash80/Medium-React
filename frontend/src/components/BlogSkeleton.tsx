export const BlogSkeleton = () => {
  return(
    <div role="status" className="animate-pulse">
      <div className="flex justify-center pt-10">
        <div className="w-5/6">
          <div className="grid grid-cols-4">
            <div className="col-span-3">
              <div>
                <div className="text-8xl font-bold">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>
                <div className="pt-5 text-slate-500">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>
                <div className="pt-7">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              </div>
              <div className="flex pt-5">
                <div className="">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>
                <div className="pl-3">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>


  )
}
