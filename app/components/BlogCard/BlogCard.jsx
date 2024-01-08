import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({post}) => {
  return (
    <div className="md:flex gap-4 ">
      <div className="relative h-[300px] md:h-[300px] md:flex-[2]">
        <Image fill src={post.img} alt="blog image" className="object-center object-cover rounded-md shadow-sm h-full" />
      </div>
      <div className="md:flex-[3]">
      <div className="mt-4">
        <span className="text-gray-400 text-sm font-light">01/01/2024</span> .<span className="text-pink-600 ml-1 capitalize">{post.category}</span>
      </div>
      <h1 className="mt-3 text-xl font-bold">
        {post.title}
      </h1>
      <p className="my-6 tracking-wide text-gray-800 dark:text-gray-100">
        {post.shortDesc.substring(0, 100)}...
      </p>
     <Link  href={`/blog/${post._id}`}>
     <Button color="primary" className="font-light">Read More</Button>
     </Link>
  
      </div>
    </div>
  );
};

export default BlogCard;
