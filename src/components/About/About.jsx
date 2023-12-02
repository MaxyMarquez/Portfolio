import React from 'react'
import foto from '../../assets/foto.jpg'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiNodedotjs, SiSequelize, SiPostgresql, SiBootstrap, SiTailwindcss, SiSass } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";
import { Icon } from '@iconify/react';

const About = () => {
    return (
        <div id='about' className='grid place-content-center gap-10 max-w-4xl text-center h-screen'>
            <h1 className=' text-zinc-400 text-6xl' >About me!</h1>
            <div className='flex items-center justify-center w-full'>
                <div className='flex flex-col items-center'>
                    <p className='flex-1 text-white text-xl text-center font-mono p-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla, neque unde maiores laboriosam ex pariatur ratione hic voluptatibus cumque nam facere mollitia suscipit repellendus molestias aliquid, numquam labore modi?
                    </p>
                    <div className='flex items-center justify-center flex-wrap gap-3 z-10 bg-transparent p-5 mt-6'>
                        <span className='relative group bg-transparent'>
                            <Icon icon="vscode-icons:file-type-html" className='w-10 h-10' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700  rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700 ">
                                HTML5
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="vscode-icons:file-type-css" className='w-10 h-10' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                CSS3
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="devicon:react-wordmark" className='w-10 h-10' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                React
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="devicon:redux" className='w-10 h-10' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Redux
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="devicon:bootstrap" className='w-10 h-10' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Bootstrap
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="vscode-icons:file-type-tailwind" className='w-10 h-10' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Tailwind CSS
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="logos:sass" className='w-10 h-10' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Sass: Syntactically Awesome Style Sheets
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="devicon:javascript" className='w-10 h-10' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                JavaScript
                            </span>
                        </span>

                        <span className='relative group bg-transparent'>
                            <Icon icon="vscode-icons:file-type-node" className='w-10 h-10' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Node.js
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="logos:sequelize" className='w-10 h-10' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                Sequelize
                            </span>
                        </span>
                        <span className='relative group bg-transparent'>
                            <Icon icon="devicon:postgresql-wordmark" className='w-10 h-10' />
                            <span
                                className="absolute hidden group-hover:flex -top-3 -translate-y-full w-max p-2 bg-gray-700 rounded-lg text-center text-white text-sm transform -translate-x-1/2 left-1/2 after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
                                PostgreSQL
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About