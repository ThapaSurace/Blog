import BlogCard from "../BlogCard/BlogCard"
import Pazination from "../pagination/Pazination"

const BlogList = () => {
  return (
    <div className="flex flex-col gap-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <Pazination />
          </div>
  )
}

export default BlogList