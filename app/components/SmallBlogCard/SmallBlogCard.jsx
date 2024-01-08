import React from 'react'

const SmallBlogCard = () => {
  return (
    <div className="mb-2">
        <span className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 py-1 px-3 text-xs rounded-xl">
          travels
        </span>
        <h3 className="text-lg font-bold my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
        <div>
          <span className="mr-2">Author name</span>
          <span className="text-extralight">01/02/2024</span>
        </div>
      </div>
  )
}

export default SmallBlogCard