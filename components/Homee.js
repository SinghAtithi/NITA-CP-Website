import React from "react";
import Image from "next/image";
import Link from "next/link";

import HeroPic from '../public/HeroPic.jpg'

function Homee() {
  return (
    <div>
      <div className="px-6 lg:px-10 2xl:px-0 py-8 sm:py-16 bg-white dark:bg-gray-800">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6 order-2 sm:order-1">
            <div className="w-20 h-2 bg-gray-800 dark:bg-white" />
            <div className="font-bebas-neue uppercase font-black dark:text-white text-gray-800">
              <h1 className="text-6xl sm:text-8xl ">
                CP For
              </h1>
              <h2 className="text-5xl sm:text-7xl">All</h2>
            </div>
            <p className="text-gray-700 dark:text-white">
              Lets dive into an amazing journey together, This website will help
              you in fast forwarding your competitive programming journey
            </p>
            <p className="text-gray-700 dark:text-white">
              From resources and practice problems, to blogs and edutorials - We have got everything covered.
            </p>
            <div className="flex">
              <Link href="/resources">
                <a className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                  Resources
                </a>
              </Link>
              <Link href="/a2oj">
                <a className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                  A2OJ
                </a>
              </Link>
            </div>
          </div>

          <div className="w-full order-1 sm:order-2 flex items-center justify-center">
            <div className="w-5/6">
              <Image
                src={ HeroPic }
                alt="me"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homee;
