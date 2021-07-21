import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import video_image from '../assets/Golden_Gate_Traffic.jpg';
// import resume from "../assets/Jacob_Finch_Resume.pdf";

export function Navbar() {
    const router = useRouter();

    const isActiveView = (path) => {
        console.log(router.pathname);
        if (router.pathname === path) {
            return 'active-view';
        }
    };

    const windowWidth = () => {
        //   console.log(window.innerWidth);
        // if(window.innerWidth > 500) {
        //       return "45";
        // } else {
        return '55';
        // }
    };

    return (
        <nav className='nav'>
            <nav className='nav__user-nav'>
                <div className='nav__user-nav--left'>
                    <span className={isActiveView('/work')}>
                        <Link href='/work'>
                            <a>Work.</a>
                        </Link>
                    </span>
                    <span className={isActiveView('/contact')}>
                        <Link href='/contact'>
                            <a>Contact.</a>
                        </Link>
                    </span>
                    <span className={isActiveView('/bio')}>
                        <Link href='/bio'>
                            <a>About.</a>
                        </Link>
                    </span>
                    <span className={isActiveView('/languages')}>
                        <Link href='/languages'>
                            <a>Languages.</a>
                        </Link>
                    </span>
                </div>
                <div className='nav__user-nav--right'>
                    <span>
                        <a target='_blank' rel='noopener noreferrer' href='https://github.com/jacobdavidfinch'>
                            Github.
                        </a>
                    </span>
                    <span>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/jacob-finch/'>
                            LinkedIn.
                        </a>
                    </span>
                    <span className={isActiveView('/bio')}>
                        <Link href='/blog'>
                            <a>Blog.</a>
                        </Link>
                    </span>
                    <span>{/* <a href={resume} target='_blank' rel="noopener noreferrer">Resume.</a> */}</span>
                </div>
            </nav>
            <div className='nav__logo'>
                {/* <Link href="/"> */}
                {/* <Image src={logo} alt="DevByJake Logo" height={windowWidth()} /> */}
                {/* </Link> */}
            </div>
            <div className='bg-video'>
                <video className='bg-video__content' autoPlay muted loop>
                    <source src={'/video/Golden_Gate_Traffic.mp4'} type='video/mp4' />
                    <source src={video_image} type='video/webm' />
                    Your browser is not supported!
                </video>
            </div>
            <div className='bg-video-reversed'>
                {/* <video className="bg-video__content" autoPlay muted playsinline loop>
                              <source src={video} poster={video_image} type="video/mp4" />
                              <source src={video_image} type="video/webm" />
                              Your browser is not supported!
                        </video> */}
            </div>
            <div className='background-box' />
        </nav>
    );
}
