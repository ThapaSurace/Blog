
import BlogList from "../components/Bloglist/BlogList"
import SideMenu from "../components/SideMenu/SideMenu"

const Page = ({searchParams}) => {
const {category} = searchParams
  return (
   <div className="max-w-6xl mx-auto my-10 px-6">
    <div className=" bg-purple-400 py-4 rounded-md text-center text-white font-bold mb-6 capitalize text-3xl">{category}</div>
     <div className="lg:flex gap-20">
    <div className="lg:basis-4/6">
     <BlogList cat={category} />
    </div>
    <div className="lg:basis-1/3 mt-10 lg:mt-0">
      <SideMenu />
    </div>
  </div>
   </div>
  )
}

export default Page