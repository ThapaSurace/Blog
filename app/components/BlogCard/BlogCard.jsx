

import Link from "next/link";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const BlogCard = ({ post }) => {
  return (
    // <div className="gap-4 ">
    //   <div className="relative h-[300px] md:h-[300px] md:flex-[2]">
    //     <Image
    //       fill
    //       src={post.img}
    //       alt="blog image"
    //       className="object-center object-cover rounded-md shadow-sm h-full"
    //     />
    //   </div>
    //   <div className="mt-3 prose dark:prose-invert">
    //     <div>
    //       <span className="text-gray-400 text-sm font-light">01/01/2024</span> .
    //       <span className="text-pink-600 capitalize">{post.category}</span>
    //     </div>
    //     <h3>{post.title}</h3>
    //     <p>{post.shortDesc.substring(0, 100)}...</p>
    //     <Link href={`/blog/${post._id}`}>
    //       <Button color="primary" className="font-light">
    //         Read More
    //       </Button>
    //     </Link>
    //   </div>
    // </div>
    <Card isFooterBlurred className="h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-white/90 font-medium text-xl">{post.title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-center object-cover"
        src={post.img}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 object-cover object-center"
            src={post.img}
          />
          <div className="flex flex-col">
            <p className="text-white/60 text-sm">John Doe</p>
            <p className="text-white/60 text-sm">22 jan 2023</p>
          </div>
        </div>
        <Link href={`/blog/${post._id}`}>
        <Button radius="full" size="sm" color="primary">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
