import React from "react";
import SmallBlogCard from "../SmallBlogCard/SmallBlogCard";

const SideMenu = () => {
  return (
    <div>
      <h4>What"s hot</h4>
      <h1 className="text-xl font-bold mb-4">Most Popular</h1>
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
      <SmallBlogCard />
    </div>
  );
};

export default SideMenu;
