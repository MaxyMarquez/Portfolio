import React from 'react'
import TypewriterEffect from '../TypewriterEffect/TypewriterEffect '
import { ArrowDown, GitHub, Gmail, Instagram, Linkedin } from '../Icons/Icons'
import './Header.css'

const Header = () => {
    return (
        <>
            <header className='container-none w-full h-screen relative flex items-center justify-center flex-col flex-wrap font-mono p-5'>
                <article className='relative'>
                    <h1 className='lg:text-7xl md:text-5xl text-3xl text-shadow text-white'>Hello!</h1>
                    <h1 className='lg:text-8xl md:text-6xl text-4xl text-shadow text-white'>I'm <span className='text-red-500 text-shadow'>Maximiliano</span></h1>
                    <h1 className='lg:text-5xl md:text-3xl text-xl text-zinc-400 text-shadow'><TypewriterEffect text={'Full Stack Web Developer'} speed={50} showCursor={true} /></h1>
                    <div className='flex items-center justify-center absolute left-0 mt-3'>
                        <a href='https://www.linkedin.com/in/maximiliano-marquez-519274183/' className='fill-zinc-400 text-xl p-2 me-2 border hover:fill-red-500 hover:border-red-500 duration-300' target='_blank'>{Linkedin}</a>
                        <a href='https://github.com/MaxyMarquez' className='fill-zinc-400 text-xl p-2 me-2 border hover:fill-red-500 hover:border-red-500 duration-300' target='_blank'>{GitHub}</a>
                        <a href='https://www.instagram.com/maxy.marquez/' className='fill-zinc-400 text-xl p-2 me-2 border hover:fill-red-500 hover:border-red-500 duration-300' target='_blank'>{Instagram}</a>
                        <a href='mailto:maxy.marquez90@gmail.com' className='fill-zinc-400 text-xl p-2 me-2 border hover:fill-red-500 hover:border-red-500 duration-300' target='_blank'>{Gmail}</a>
                    </div>
                </article>
                <a href='#about' className=' arrow-down p-10 absolute bottom-0 fill-zinc-400 text-3xl hover:fill-red-500 duration-200 bg-transparent'>{ArrowDown}</a>
            </header>
        </>
    )
}

export default Header