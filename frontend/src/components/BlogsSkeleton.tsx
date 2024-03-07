
export const BlogsSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="flex justify-center pt-10">
        <div className="w-5/6">
          <div className="grid grid-cols-4">
            <div className="col-span-3">
              <div className="flex">
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>
                <div className="font-extralight pl-2">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>
                <div className="pl-1 pr-1">
                  &#9679;
                </div>
                <div className="text-slate-500 font-medium">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </div>
              </div>

              <div className="pt-3 text-lg text-black font-semibold">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              </div>
              <div className="pt-2 text-slate-500">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              </div>
              <div className="pt-5 pb-5">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              </div>
            </div>

            <div className="border">

            </div>
          </div>
          <div className="border-b-2 h-1 w-full">
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
