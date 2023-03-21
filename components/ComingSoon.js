import React from "react";
import Link from "next/link"

function ComingSoon() {
  return (
    <div className="flex flex-col justify-center bg-purple-600 items-center min-w-full min-h-screen">
      <p className="text-5xl sm:text-7xl text-center text-white font-bold">Coming soon</p>
      <div className="">
        <Link href="/">
          <a>
            <button
              type="button"
              className="py-3 px-4 mt-8  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Home page
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ComingSoon;
