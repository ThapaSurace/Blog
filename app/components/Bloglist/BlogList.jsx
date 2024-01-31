import BlogCard from "../BlogCard/BlogCard";
import { getData } from "@/app/utils/fetchApi";

const BlogList = async ({cat}) => {
  const data = await getData(cat);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10">
      {data.map((item) => (
        <BlogCard key={item._id} post={item} />
      ))}
    </div>
  );
};

export default BlogList;
