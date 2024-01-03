import Image from "next/image";
import { Avatar } from "@nextui-org/react";
import SideMenu from "../components/SideMenu/SideMenu";
import Comment from "../components/Comment/Comment";

const Page = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 px-6 lg:px-1">
      <div className="md:flex gap-10">
        <div className="md:flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            nobis.
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
            src="/images/header.jpg"
            alt="blog image"
            className="rounded-md shadow-md"
          />
        </div>
      </div>
      <div className="mt-10 md:flex gap-20">
        <div className="basis-4/6">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
            aliquid? Ipsum eos sed ad possimus delectus libero, atque laudantium
            commodi eum ea in voluptatibus harum, rem unde cumque, nisi neque.
            Quam voluptatibus aliquid ea nobis! At sed nostrum earum adipisci
            pariatur architecto explicabo! Voluptate omnis quasi, eveniet ex rem
            commodi.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            ipsam ea. Aut rem velit architecto? Ipsa fugiat saepe, nemo
            explicabo repellat enim? Modi nam exercitationem dicta nobis
            maiores? Non officiis quam, ipsum temporibus perspiciatis cum amet
            quaerat ea odit dolorem.
          </p>

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
