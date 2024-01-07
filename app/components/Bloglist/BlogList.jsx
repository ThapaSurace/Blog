"use client"
import { usePostQuery } from "@/app/utils/fetchApi"
import BlogCard from "../BlogCard/BlogCard"
import Pazination from "../pagination/Pazination"

const BlogList = () => {
  const {data,isLoading,error} = usePostQuery()
  return (
    <div className="flex flex-col gap-8">
          {
            isLoading ? "loading...."
            :error ? "Something went wrong!!"
            :(
              data.map(item=>(
                <BlogCard key={item._id} post={item} />
              ))
            )
          }
          </div>
  )
}

export default BlogList