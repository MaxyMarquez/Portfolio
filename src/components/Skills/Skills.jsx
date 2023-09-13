import React, { useState } from 'react';
import { useParallax, Parallax } from 'react-scroll-parallax';
import htmlLogo from '../../assets/html-5.png';
import cssLogo from '../../assets/css-3.png';
import reactLogo from '../../assets/react.png';
import reduxLogo from '../../assets/redux.png';
import bootstrapLogo from '../../assets/bootstrap.png';
import taildwindLogo from '../../assets/tailwind.png';
import jsLogo from '../../assets/js.png'
import nodeLogo from '../../assets/node.png'
import expressLogo from '../../assets/express.png'
import sequelizeLogo from '../../assets/sequelize.png'
import postgresLogo from '../../assets/postgres.png'
import './skills.css';

const Skills = () => {
    const frontEndSkills = [
        {
            name: 'HTML',
            image: htmlLogo,
        },
        {
            name: 'CSS',
            image: cssLogo,
        },
        {
            name: 'React',
            image: reactLogo,
        },
        {
            name: 'Redux',
            image: reduxLogo,
        },
        {
            name: 'Bootstrap',
            image: bootstrapLogo,
        },
        {
            name: 'Tailwind',
            image: taildwindLogo,
        },
    ];

    const backEndSkills = [
        {
            name: 'JavaScript',
            image: jsLogo,
        },
        {
            name: 'Node.js',
            image: nodeLogo,
        },
        {
            name: 'Express',
            image: expressLogo,
        },
        {
            name: 'Sequelize',
            image: sequelizeLogo,
        },
        {
            name: 'Postgres',
            image: postgresLogo,
        },
    ];

    const [activeSkills, setActiveSkills] = useState(frontEndSkills);
    const [animation, setAnimation] = useState(true);
    const [isActive, setIsActive] = useState(true);


    const handleFrontEndClick = () => {
        setAnimation(false);
        setTimeout(() => {
            setActiveSkills(frontEndSkills);
            setAnimation(true);
            setIsActive(!isActive);
        }, 300);
    };

    const handleBackEndClick = () => {
        setAnimation(false);
        setTimeout(() => {
            setActiveSkills(backEndSkills);
            setAnimation(true);
            setIsActive(!isActive);
        }, 300);
    };

    return (
        <section id='about' className='flex flex-col items-center justify-center max-lg:flex-col w-full h-auto py-10 relative font-mono overflow-hidden'>
            <div className='flex flex-col items-center justify-center w-full'>
                <h1 className='text-gray-600 text-6xl text-shadow mx-5'>About me</h1>
                <p className='text-center px-10 mt-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, ratione laudantium nesciunt error minus. Vitae, aperiam nam voluptatum molestias quas, vero a debitis sit nostrum, eum ut officia error!</p>

            </div>
            <div className='skills-container flex flex-col items-center justify-center w-full h-screen bg-transparent'>
                <Parallax
                    translateY={['0%', '100%']}
                    scale={[.5, 1]}
                    easing="easeInQuad"


                >
                    <div className=''>
                        <h1 className='max-sm:text-6xl text-9xl text-gray-600 text-shadow'>Frontend</h1>

                    </div>
                </Parallax>
                <Parallax
                    translateX={['-10%', '50%']}
                    scale={[1, 1]}
                    easing="easeInQuad"
                    speed={5}
                    style={{ background: 'transparent' }}

                >
                    <div className='bg-transparent w-full flex justify-center items-center flex-wrap'>
                        <ul className='z-50 bg-transparent flex items-center justify-start flex-wrap'>
                            {frontEndSkills.map((skill, index) => (
                                <li key={index} className='bg-transparent bg-neutral-900 relative flex items-center justify-center flex-wrap'>

                                    <img className='bg-transparent max-sm:p-1 m-1 p-3 max-sm:w-[80px] w-[200px]' src={skill.image} alt='' />
                                    {/* <p className='absolute bottom-0 text-gray-500 max-sm:text-[12px] bg-transparent'>{skill.name}</p> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Parallax>
            </div>
            <div className='skills-container flex flex-col items-center justify-center w-full h-screen py-10 mt-10 bg-transparent'>
                <Parallax
                    translateY={['-10%', '100%']}
                    scale={[.5, 1]}
                    easing="easeInQuad"
                >
                    <div className=''>
                        <h1 className='text-9xl text-gray-600 text-shadow'>Backend</h1>

                    </div>
                </Parallax>
                <Parallax
                    translateX={['50%', '-15%']}
                    scale={[1, 1]}
                    easing="easeOutQuad"
                    speed={5}
                    style={{ background: 'transparent' }}

                >
                    <div className='bg-transparent w-full flex justify-center items-center flex-wrap'>
                        <ul className='w-50 mt-5 z-50 bg-transparent flex justify-start'>
                            {backEndSkills.map((skill, index) => (
                                <li key={index} className='bg-transparent bg-neutral-900 p-5 relative flex items-center justify-center'>
                                    <img className='bg-transparent p-3 w-[200px]' src={skill.image} alt='' />
                                    <p className='absolute bottom-0 text-gray-500 bg-transparent'>{skill.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Parallax>
            </div>

        </section >
    );
};

export default Skills;

