import { getSinglePost } from "@/app/utils/fetchApi";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Hero = async () => {
  const id = "659a96829352ce0aee775b9d"
  const data = await getSinglePost(id)
  
  return (
    <div className="md:flex md:gap-4">
           <div className="relative h-[250px] md:h-[400px] mb-4 md:flex-1">
        <Image
          fill
          src={data.img}
          alt="header image"
          className="rounded-md object-cover object-center"
        />
      </div>
      <div className="md:flex-1 md:flex md:justify-center md:items-center">
       <div>
       <h1 className="text-2xl font-bold">
          {data.title}
        </h1>
        <p className="my-4">
          {data.shortDesc}
        </p>
       <Link href={`/blog/${data._id}`}>
       <Button color="primary">Read More</Button>
       </Link>
       </div>
      </div>
    </div>
  );
};

export default Hero;
