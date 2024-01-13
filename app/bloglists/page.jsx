import React from "react";
import BlogTable from "../components/Table/BlogTable";
import { getData } from "../utils/fetchApi";

const page = async () => {
  const data = await getData();
  return (
    <div className="max-w-6xl mx-auto min-h-[calc(100vh-154.8px)] flex justify-center items-center">
      <div className="w-full">
        <h1 className="mb-6 text-center">Blog Lists</h1>
        <BlogTable data={data} />
      </div>
    </div>
  );
};

export default page;
