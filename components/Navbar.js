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
  let [ currentTab, setTab ] = useState(0)

  useEffect(() => {
    if(window.sessionStorage.currentTab)
      setTab(Number(window.sessionStorage.currentTab))
  }, []);

  useEffect(() => {
    window.sessionStorage.currentTab = currentTab
  }, [currentTab]);

  function changeTab(i) {
    setTab(i)
  }

  const tab = tabs.map((item, i) => {
    return (
      <li key={ item.name }>
        <Link href={ item.href }>
          <a className={ `block ${ currentTab === i ? 'navhome' : 'tab' } text-center` } onClick={ changeTab.bind(this, i) }>
            { item.name }
          </a>
        </Link>
      </li>
    )
  })

  return (
    <nav className="px-6 sm:px-10 py-4 bg-gray-100 relative z-10 shadow">
      <div className="max-w-7xl mx-auto flex items-center">
        <Link href="/">
          <a>
            <div className="text-3xl cursor-pointer text-purple-900 font-semibold">NITA-CP</div>
          </a>
        </Link>

        <div className="ml-auto">
          <ul className="hidden sm:flex space-x-4 text-lg">
            { tab }
          </ul>
          <div className="sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;