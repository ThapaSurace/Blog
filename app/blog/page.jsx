
import BlogList from "../components/Bloglist/BlogList"
import SideMenu from "../components/SideMenu/SideMenu"



const Page = () => {

  return (
   <div className="max-w-6xl mx-auto my-10 px-6">
    <div className="bg-[#f0abfc] py-4 rounded-md text-center text-white font-bold mb-6">Category</div>
     <div className="lg:flex gap-20">
    <div className="lg:basis-4/6">
     <BlogList />
    </div>
    <div className="lg:basis-1/3 mt-10 lg:mt-0">
      <SideMenu />
    </div>
  </div>
   </div>
  )
}

export default Page