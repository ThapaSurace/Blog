import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import SideMenu from "@/app/components/SideMenu/SideMenu";
import Comment from "@/app/components/Comment/Comment";
import { getSinglePost } from "@/app/utils/fetchApi";

const Page = async ({ params }) => {
  const { id } = params;
  const data = await getSinglePost(id);
  return (
    <div className="max-w-6xl mx-auto my-10 px-6 lg:px-1">
      <div className="md:flex gap-10">
        <div className="md:flex-1">
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
        <div className="relative h-[300px] md:flex-1 mt-6 md:mt-0">
          <Image
            fill
            src={data.img}
            alt="blog image"
            className="rounded-md shadow-md"
          />
        </div>
      </div>
      <div className="mt-10 md:flex gap-20">
        <div className="basis-4/6">
          <div dangerouslySetInnerHTML={{ __html: `${data?.longDesc}` }} />

          <div className="mt-6">
            <h2 className="text-3xl font-bold">Comments</h2>
            <Comment />
          </div>
        </div>
        <div className="basis-1/3 mt-10">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Page;
