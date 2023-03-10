import React from 'react'

const About = () => {
    return (
        <div name="about"
        className='w-full h-screen bg-gradient-to-b from-gray-800
        to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col
            justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4
                    border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-12'><li>Bachelor of Science B.Sc, Information Technology (IT).</li> <br />
                <li><span>College:-</span> D.T.S.S. College Of Commerce, (malad) Mumbai 2020-2023.</li> <br />
                <li>Currently, it's my last year of graduation (3rd year)</li>
                </p>
            </div>
        </div>
    )
}

export default About