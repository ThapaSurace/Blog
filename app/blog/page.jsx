import BlogList from "../components/Bloglist/BlogList";

const Page = ({ searchParams }) => {
  const { category } = searchParams;
  return (
    <div className="max-w-6xl mx-auto my-10 px-6">
      <h1 className="text-center font-bold mb-10 capitalize text-5xl">
        {category}
      </h1>
      <BlogList cat={category} />
    </div>
  );
};

export default Page;
