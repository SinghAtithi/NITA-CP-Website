import React from "react";
import Image from "next/image"

function BlogCard() {
  return (
    <div className="m-6">
      <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <a href="#" className="w-full block h-full">
        <Image
            src="/images/person6.webp"
            alt="Picture of the blog"
            width={330}
            height={190}
            className="max-h-40 w-full object-cover"
          />
          
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-indigo-500 text-md font-medium">Article</p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              Supercharged !
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              The new supercar is here, 543 cv and 140 000$. This is best racing
              GT about 7 years on...
            </p>
            <div className="flex flex-wrap justify-starts items-center mt-4">
              <div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #Car
              </div>
              <div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #Money
              </div>
              <div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #Money
              </div>
              <div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #Money
              </div>
              <div className="text-xs m-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #Money
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
