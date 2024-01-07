import BlogCard from "../BlogCard/BlogCard";
import Pazination from "../pagination/Pazination";
import { getData } from "@/app/utils/fetchApi";


const BlogList = async () => {
  const data = await getData();
 console.log(data)
  return (
    <div className="flex flex-col gap-8">
      {data.map((item) => (
        <BlogCard key={item._id} post={item} />
      ))}
    </div>
  );
};

export default BlogList;
