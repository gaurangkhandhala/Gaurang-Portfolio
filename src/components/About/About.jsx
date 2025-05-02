import React from 'react'
import './About.css'
import img2 from '../../assets/g2.jpg'

export default function About() {
    return (

        <div className='container'>
            <div className='Title text-center'>
                <h6>Get To Know</h6>
                <h1>About me</h1>
            </div>
            <div className='About row  d-flex justify-content-center gap-md-3 gap-3'>
                <div className='col-lg-4 col-md-5 col-9 d-flex justify-content-center align-items-center'>
                    <img src={img2} alt="" className='img2 img-fluid rounded-3 d-flex' />
                </div>
                <div className=' d-flex flex-column  justify-content-center gap-2 col-lg-7 col-md-10 col-11'>
                    <p className='m-0'> I'm Web Developer from Ahemdabad. Motivated and detail-oriented Computer Science graduate with a strong background in full-stack web development. Proficient in modern technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB. Completed Skill base Course at [Red & White Multimedia Eduction ] and where I developed and maintained web applications, ensuring optimal performance and user experience. Proven ability to work in collaborative environments and tackle complex technical challenges through academic projects and hackathons. Eager to contribute my skills and enthusiasm to a dynamic development team in a full-stack developer role.</p>
                    <h2 className=' text-center'>What I'm Doing</h2>
                    <div className='d-flex flex-wrap gap-3'>
                        <div className='about-box p-3'>
                            <h3>Web design</h3>
                            <p className=' m-0'>The most modern and high-quality design made at a professional level.</p>
                        </div>
                        <div className='about-box p-3'>
                            <h3>Web development</h3>
                            <p className=' m-0'>High-quality development of sites at the professional level.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
