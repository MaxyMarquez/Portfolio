import React from 'react'
import TypewriterEffect from '../TypewriterEffect/TypewriterEffect '
import { IoMdArrowDown } from "react-icons/io";
import { SiGithub, SiLinkedin, SiInstagram, SiMaildotru } from "react-icons/si";
import foto from '../../assets/foto.jpg'
import './Header.css'

const Header = () => {
    return (
        <>
            <header className='container-none w-full h-screen relative flex items-center justify-center flex-col flex-wrap font-mono p-5'>
                <article className='relative max-w-4xl bg-transparent'>

                    <h1 className='lg:text-7xl md:text-5xl text-3xl text-shadow text-white bg-transparent'>Hello!</h1>
                    <h1 className='lg:text-8xl md:text-6xl text-4xl text-shadow text-white bg-transparent'>
                        I'm <span className='relative text-red-500 text-shadow bg-transparent z-10'>
                            Maximiliano
                        </span>
                        <picture className='rounded-blob absolute lg:-top-32 lg:right-10 -top-16 right-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-72 lg:h-72 overflow-hidden'>
                            <img src={foto} alt="" className='w-full h-full object-cover' />
                        </picture>
                    </h1>
                    <h1 className='lg:text-5xl md:text-3xl text-xl text-zinc-400 text-shadow bg-transparent'><TypewriterEffect text={'Full Stack Web Developer'} speed={50} showCursor={true} /></h1>

                    <div className='flex items-center justify-center absolute left-0 mt-4'>
                        <a href='https://www.linkedin.com/in/maximiliano-marquez-519274183/' className='group fill-zinc-400 text-xl p-2 me-2 border hover:border-red-500 duration-300' target='_blank'>
                            <SiLinkedin className='text-zinc-400 group-hover:text-red-500 duration-300' />
                        </a>
                        <a href='https://github.com/MaxyMarquez' className='group text-xl p-2 me-2 border  hover:border-red-500 duration-300' target='_blank'>
                            <SiGithub className='text-zinc-400 group-hover:text-red-500 duration-300' />
                        </a>
                        <a href='https://www.instagram.com/maxy.marquez/' className='group text-xl p-2 me-2 border hover:fill-red-500 hover:border-red-500 duration-300' target='_blank'>
                            <SiInstagram className='text-zinc-400 group-hover:text-red-500 duration-300' />
                        </a>
                        <a href='mailto:maxy.marquez90@gmail.com' className='group text-xl p-2 me-2 border hover:fill-red-500 hover:border-red-500 duration-300' target='_blank'>
                            <SiMaildotru className='text-zinc-400 group-hover:text-red-500 duration-300' />
                        </a>
                    </div>
                </article>
                <a href='#about' className=' arrow-down p-10 absolute bottom-0 fill-zinc-400 text-3xl hover:fill-red-500 duration-200 bg-transparent'><IoMdArrowDown className='text-zinc-400' /></a>
            </header>
        </>
    )
}

export default Header