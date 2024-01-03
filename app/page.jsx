import { categories } from "@/constants";
import Hero from "./components/Hero/Hero";
import BlogList from "./components/Bloglist/BlogList";
import SideMenu from "./components/SideMenu/SideMenu";


const Page = () => {
  return (
    <div className="max-w-xl md:max-w-6xl mx-auto px-6 py-4">
      <Hero />
      <div className="my-10">
        <h1 className="text-3xl font-bold">Popular Categories</h1>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <li
              key={index}
              className="h-12 flex justify-center items-center rounded-md text-white font-light md:text-lg cursor-pointer shadow-md"
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:flex gap-20">
        <div className="lg:basis-4/6">
          <h1 className="text-3xl font-bold mb-4">Recent Posts</h1>
          <BlogList />
        </div>
        <div className="lg:basis-1/3 mt-10 lg:mt-0">
         <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Page;
