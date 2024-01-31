import { categories } from "@/constants";
import Hero from "./components/Hero/Hero";
import BlogList from "./components/Bloglist/BlogList";
import SideMenu from "./components/SideMenu/SideMenu";
import { Divider } from "@nextui-org/react";
import Link from "next/link";


const Page = () => {
  return (
    <div className="max-w-xl md:max-w-6xl mx-auto px-6 py-4">
      <Hero />
      <div className="my-10">
        <h1 className="text-3xl font-bold mb-10">Popular Categories</h1>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
           <Link href={`/blog?category=${cat.name}`} key={index}>
             <li
              className="h-12 flex justify-center items-center rounded-md text-white font-light md:text-lg cursor-pointer shadow-md capitalize"
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </li>
           </Link>
          ))}
        </ul>
      </div>
      <div className="">
       
          <h1 className="text-3xl font-bold mb-4">Recent Posts</h1>
       
         <BlogList />
       
       
        {/* <Divider className="mt-6 lg:hidden" />
        <div className="lg:basis-1/3 mt-10 lg:mt-0">
         <SideMenu />
        </div> */}
      </div>
    </div>
  );
};

export default Page;
