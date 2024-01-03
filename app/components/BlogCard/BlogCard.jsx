import { Button } from "@nextui-org/react";
import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="md:flex gap-4 ">
      <div className="relative h-[200px] md:h-[330px] md:flex-[2]">
        <Image fill src="/images/header.jpg" alt="blog image" className="object-center object-cover rounded-md shadow-sm h-full" />
      </div>
      <div className="md:flex-[3]">
      <div className="mt-4">
        <span className="text-gray-400 text-sm font-light">01/01/2024</span> .<span className="text-pink-600 ml-1">Category</span>
      </div>
      <h1 className="mt-3 text-2xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, saepe?
      </h1>
      <p className="my-6 tracking-wide text-gray-800 dark:text-gray-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptas
        deleniti ab odio, a ducimus beatae saepe doloribus exercitationem qui ad
        quo atque in tenetur consequatur quisquam eaque fugiat et.
      </p>
      <span className="font-light text-gray-950 cursor-pointer dark:text-white">Read More</span>
      </div>
    </div>
  );
};

export default BlogCard;
