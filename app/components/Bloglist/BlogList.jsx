import BlogCard from "../BlogCard/BlogCard";
import { getData } from "@/app/utils/fetchApi";

const BlogList = async ({cat}) => {
  const data = await getData(cat);

  return (
    <div className="grid grid-cols-3 gap-8">
      {data.map((item) => (
        <BlogCard key={item._id} post={item} />
      ))}
    </div>
  );
};

export default BlogList;
