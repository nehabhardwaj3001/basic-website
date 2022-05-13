import React from 'react'

function page1() {
    return (
        <div>
            <div className='page-1'>
                <div className='navbar'>
                    <div className="navigation-menu">
                        <a href="#"><h1>Serenity</h1></a>
                    </div>
                    <div className='links'>
                        <a href="/#" className='nav-1'>Welcome</a>
                        <a href="#" className='nav-2'>About</a>
                        <a href="#" className='nav-3'>Services</a>
                        <a href="#" className='nav-4'>Team</a>
                        <a href="#" className='nav-5'>Blog</a>
                        <a href="#" className='nav-6'>Contact</a>
                    </div>
                </div>
                <div className='header'>
                    <h1> LAUNCH.YOUR.WEBSITE </h1>
                    <h2>Simple & Elegent One-Page WordPress Theme</h2><br></br>
                    <p>An elegent, easy-to-use, one-page WordPress theme for professional and businesses.</p>
                    <p>Perfect to promote your projects, products or services.</p><br></br>
                    <button className='learn-more'>Learn More</button>
                    <button className='download-now'>Download Now</button>
                </div>
            </div>
        </div>
    )
}

export default page1;
