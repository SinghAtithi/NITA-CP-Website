import React from 'react'
import About from '../components/About'
import WantToContribute from '../components/WantToContribute'
function about() {
    return (
        <div className="home space-y-12">
            <About/>
            <WantToContribute/>
        </div>
    )
}

export default about
