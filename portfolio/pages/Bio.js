import React, { Component } from 'react';
import Image from 'next/image';
import bio_pic from '../assets/jake_greyscale.jpg';

class Bio extends Component {
    render() {
        return (
            <div className='card'>
                <h2 className='card__head'>Brief Career Bio.</h2>
                <div className='card__contents'>
                    <Image src={bio_pic} alt='Picture of Jake' />
                    <p className='about-blurb'>
                        Developer utilizing todays top technologies to create clean functional code by deadline.
                        Employing well regarded design patterns to distribute syntax that is not just usable, but
                        readable in large team dynamics. Background in account management at renowned ad-firm BSSP.
                        Unique agency skillset coupled with developer knowhow and strong work ethic to build real world
                        applications that fulfill both B2B and B2C expectations. <br />
                        <br />
                        <br />
                        <b>Education.</b> <br />
                        - B.A. in Advertising at the CalState Fullerton <br />
                        - Certificate in Software Engineering from UC Davis <br />- Online courses from Udemy and EDX
                    </p>
                    <div id='card__bio--personal-bio'>
                        <h3>Personal Life.</h3>
                        <ul>
                            <li>Born and raised in the beautiful Windsor, CA.</li>
                            <li>Enjoyed hiking, camping, and anything sports growing up.</li>
                            <li>Board games and puzzles sound like a great way to spend my free time.</li>
                            <li>As a kid I wanted to be a Dragon Ball Z fighter when I grew up.</li>
                            <li>
                                I entain myself with casual beer brewing and I aspire to be a woodworker when I have the
                                time.
                            </li>
                            <li>
                                I worked for a michelin star restaurant where I learned there’s more to life than pizza
                                and hamburgers.{' '}
                            </li>
                            <li>I love to learn new things and take on large challenges.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bio;
