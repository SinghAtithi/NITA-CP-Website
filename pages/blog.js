import React from 'react'
import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'

function blog() {
    return (
        <div className="home">
            <Navbar/>
        <div className="flex flex-wrap justify-around">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
        </div>
    )
}

export default blog
