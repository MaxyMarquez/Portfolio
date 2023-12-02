import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import Projects from '../Projects/Projects'

const Home = () => {
    return (
        <div className='grid place-content-center w-full'>
            <Header />
            <About />
            <Projects />
        </div>
    )
}

export default Home