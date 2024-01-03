import { Button } from "@nextui-org/react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="md:flex md:gap-4">
      <div className="relative h-[250px] md:h-[400px] mb-4 md:flex-1">
        <Image
          fill
          src="/images/header.jpg"
          alt="header image"
          className="rounded-md object-cover object-center"
        />
      </div>
      <div className="md:flex-1 md:flex md:justify-center md:items-center">
       <div>
       <h1 className="text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eum.
        </h1>
        <p className="my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores illo
          quia quidem facilis recusandae? Eaque veritatis nam, vitae cumque sint
          quo quae laudantium doloremque dolor voluptates aut autem nobis.
          Voluptatem?
        </p>
        <Button color="primary">Read More</Button>
       </div>
      </div>
    </div>
  );
};

export default Hero;
