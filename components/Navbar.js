import React, { useState, useEffect } from "react";
import Link from "next/link";

const tabs = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'A2OJ', href: '/a2oj' },
]
// {name: 'Practice', href: '/practice', current: false},

function Navbar() {
  const [ currentTab, setTab ] = useState(0)
  const [ isOpen, open ] = useState(false)

  useEffect(() => {
    if(window.sessionStorage.currentTab)
      setTab(Number(window.sessionStorage.currentTab))
  }, []);

  useEffect(() => {
    window.sessionStorage.currentTab = currentTab
  }, [currentTab]);

  const tab = tabs.map((item, i) => {
    return (
      <li key={ item.name }>
        <Link href={ item.href }>
          <a className={ `block ${ currentTab === i ? 'navhome' : 'tab' } sm:text-center` } onClick={ setTab.bind(this, i) }>
            { item.name }
          </a>
        </Link>
      </li>
    )
  })

  return (
    <div>
      <div className="px-6 sm:px-10 py-4 bg-gray-100 relative z-10 shadow">
        <nav className="max-w-7xl mx-auto flex items-center relative z-10">
          <Link href="/">
            <a>
              <div className="text-3xl cursor-pointer text-purple-900 font-semibold">NITA-CP</div>
            </a>
          </Link>

          <div className="ml-auto">
            <ul className="hidden sm:flex space-x-4 text-lg">
              { tab }
            </ul>
            <div className="flex items-center justify-center sm:hidden w-9 h-9 hover:bg-gray-300 rounded-full cursor-pointer" onClick={ open.bind(this, !isOpen) }>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
        </nav>
        <nav className={`${isOpen ? 'sm:hidden flex flex-col' : 'hidden'} pt-4 select-none`}>
          <ul className="text-md">
            { tab }
          </ul>
        </nav>
      </div>
      <div className={`${isOpen ? 'sm:hidden' : 'hidden'} w-screen h-screen bg-gray-800 opacity-50 fixed top-0 left-0`} />
    </div>
  );
}

export default Navbar;