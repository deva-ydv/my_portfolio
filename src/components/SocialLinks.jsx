import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                     <FaLinkedin size={30} />
                     <>LinkedIn</>
                </>
            ),
            href: 'https://www.linkedin.com/in/devanand-yadav-558b521b6',
            style: 'rounded-tl-md'
        },
        {
            id: 2,
            child: (
                <>
                     <FaGithub size={30} />
                     <>GitHub</>
                </>
            ),
            href: 'https://github.com/deva-ydv',
        },
        {
            id: 3,
            child: (
                <>
                     <FaTwitter size={30} />
                     <>Tiwitter</>
                </>
            ),
            href: 'https://twitter.com/Deva_eth',
        },
        {
            id: 4,
            child: (
                <>
                 <BsFillPersonLinesFill size={30}  />
                 <>Resume</>
                </>
               
            ),
            href: '/resume.pdf',
            style: 'rounded-bl-md',
            download: true,
        },
    ];
    return (
        <div className=' lg:flex flex-col top-[35%] right-0 fixed'>
         <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:ml-[-90px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
        </div>
    )
}

export default SocialLinks