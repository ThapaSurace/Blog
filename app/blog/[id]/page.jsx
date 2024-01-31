import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import Comment from "@/app/components/Comment/Comment";
import { getSinglePost } from "@/app/utils/fetchApi";

const Page = async ({ params }) => {
  const { id } = params;
  const data = await getSinglePost(id);
  return (
    <div className="max-w-4xl mx-auto my-10 px-6 lg:px-1">
      <div className="md:flex flex-col gap-10">
        <div className="">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            {data.title}
          </h1>
          <div className="flex gap-2 items-center mt-6">
            <Avatar src="/images/header.jpg" alt="avtar" />
            <div className="flex flex-col items-center">
              <span className="text-lg">John Doe</span>
              <span className="text-sm text-gray-300">25 April 2024</span>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] mt-6 md:mt-0">
          <Image
            fill
            src={data.img}
            alt="blog image"
            className="rounded-md shadow-sm dark:shadow-white"
          />
        </div>
      </div>
      <div className="mt-10 w-full">
        <div className="prose md:prose-lg lg:prose-xl dark:prose-invert prose-a:no-underline prose-a:text-teal-700 prose-p:w-full">
          <div dangerouslySetInnerHTML={{ __html: `${data?.longDesc}` }} />
        </div>

        <div className="mt-6">
          <h2 className="text-3xl font-bold">Comments</h2>
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default Page;
