import React from 'react';
import coolcalci from '../assets/portfolio/coolcalci.jpg'
import education from '../assets/portfolio/education.jpg'
import pizzaaa from '../assets/portfolio/pizzaaa.jpg'
import port from '../assets/portfolio/port.jpg'
import travel from '../assets/portfolio/travel.jpg'
import grocery from '../assets/portfolio/grocery.jpg'

const Portfolio = () => {

    // const portfolios = [
    //     {
    //         id:1,
    //         src: coolcalci
    //     },
    //     {
    //         id:2,
    //         src: education
    //     },
    //     {
    //         id:3,
    //         src: pizzaaa
    //     },
    //     {
    //         id:4,
    //         src: port
    //     },
    //     {
    //         id:5,
    //         src: travel
    //     },
    //     {
    //         id:6,
    //         src: grocery
    //     },
    // ]


  return (
    <div name="portfolio"
    className='bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen'>
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                    border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out my projects here...</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0'>

            
                
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                <p className='text-center text-2xl'>Cool-Calci</p>
                    <img className='rounded-md duration-200 hover:scale-105' src={coolcalci} alt="" />
                    <div className='flex items-center justify-center'>
                    <a className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105' href={'https://deva-ydv.github.io/cool-calci/'}>Demo</a>
                        <a className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105' href={'https://github.com/deva-ydv/cool-calci'}>Code</a>
                    </div>
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                <p className='text-center text-2xl'>Techx website</p>
                    <img className='rounded-md duration-200 hover:scale-105' src={education} alt="" />
                    <div className='flex items-center justify-center'>
                    <a className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105' href={'https://deva-ydv.github.io/Techx-website/'}>Demo</a>
                        <a className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105' href={'https://github.com/deva-ydv/Techx-website'}>Code</a>
                    </div>
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <p className='text-center text-2xl'>Pizza Full-stack</p>
                    <img className='rounded-md duration-200 hover:scale-105' src={pizzaaa} alt="" />
                    <div className='flex items-center justify-center'>
                    <a className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105' href={'https://github.com/deva-ydv/Full-stack-pizza-website'}>Demo</a>
                        <a className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105' href={'https://github.com/deva-ydv/Full-stack-pizza-website'}>Code</a>
                    </div>
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                <p className='text-center text-2xl'>Portfolio-Design</p>
                    <img className='rounded-md duration-200 hover:scale-105' src={port} alt="" />
                    <div className='flex items-center justify-center'>
                    <a className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105' href={'https://deva-ydv.github.io/portfolio-design/'}>Demo</a>
                        <a className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105' href={'https://github.com/deva-ydv/portfolio-design'}>Code</a>
                    </div>
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                <p className='text-center text-2xl'>Travel website</p>
                    <img className='rounded-md duration-200 hover:scale-105' src={travel} alt="" />
                    <div className='flex items-center justify-center'>
                        <a className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105' href={'https://deva-ydv.github.io/travel-website/'}>Demo</a>
                        <a className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105' href={'https://github.com/deva-ydv/travel-website'}>Code</a>
                    </div>
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                <p className='text-center text-2xl'>Groco website</p>
                    <img className='rounded-md duration-200 hover:scale-105' src={grocery} alt="" />
                    <div className='flex items-center justify-center'>
                    <a className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105' href={'https://deva-ydv.github.io/groco/'}>Demo</a>
                        <a className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105' href={'https://github.com/deva-ydv/groco'}>Code</a>
                    </div>
                </div>
                
            </div>
           
        </div>
    </div>
  )
}

export default Portfolio