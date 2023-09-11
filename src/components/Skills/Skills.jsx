import React, { useState } from 'react';
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
        <section id='about' className='flex items-center justify-center max-lg:flex-col w-full h-screen relative font-mono'>
            <div className='flex flex-col items-center justify-center w-full'>
                <h1 className='text-white text-6xl text-shadow mx-5'>About me</h1>
                <p className='text-center px-10 mt-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officiis, ratione laudantium nesciunt error minus. Vitae, aperiam nam voluptatum molestias quas, vero a debitis sit nostrum, eum ut officia error!</p>

            </div>
            <div className='skills-container flex flex-col items-center justify-center w-full h-full '>
                <h1 className='text-white text-6xl text-shadow mx-5'>Skills</h1>
                <div className='relative flex items-center justify-center duration-500 mt-5'>
                    <button
                        className={`text-white text-4xl text-shadow border max-md:w-40 max-md:text-2xl w-52 py-3 z-50 cursor-pointer ${isActive ? 'bg-red-600' : ''}`}
                        onClick={handleFrontEndClick}
                        disabled={isActive}
                    >
                        Front End
                    </button>
                    <button
                        className={`text-white text-4xl text-shadow border max-md:w-40 max-md:text-2xl w-52 py-3 z-50 cursor-pointer ${!isActive ? 'bg-red-600' : ''}`}
                        onClick={handleBackEndClick}
                        disabled={!isActive}
                    >
                        Back End
                    </button>
                </div>
                <div className={` ${animation ? 'fade-in' : 'fade-out'} bg-transparent w-full flex justify-center items-center flex-wrap flex-col`}>
                    <ul className='w-96 max-sm:w-72 mt-5 z-50 bg-transparent grid grid-cols-3 gap-x-5 gap-y-2 grid-rows-2 place-items-center'>
                        {activeSkills.map((skill, index) => (
                            <li key={index} className='group sm:w-32 w-24 sm:h-32 h-24 bg-neutral-900 hover:bg-neutral-950  duration-300  p-5 relative flex items-center justify-center'>
                                <img className='group-hover:scale-110 bg-transparent p-3 duration-300' src={skill.image} alt='' />
                                <p className='absolute bottom-0 text-gray-500 bg-transparent'>{skill.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;

