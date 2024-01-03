import { menuItems } from "@/constants"

const Footer = () => {
  return (
   <div className="border-t border-gray-600/80 dark:border-gray-100/50 px-6">
     <div className="max-w-6xl mx-auto  h-[90px] flex justify-center items-center">
       <div className="flex justify-between items-center w-full">
       <span className=" font-dancing text-3xl">ZoroBlog</span>
        <ul className="flex gap-2 items-center">
            {
                menuItems.map((item,index)=>(
                    <li className="font-semibold" key={index}>{item.name}</li>
                ))
            }
        </ul>
       </div>
    </div>
   </div>
  )
}

export default Footer