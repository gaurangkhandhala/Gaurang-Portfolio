
import React from 'react'
import '../Home/Home.css'
import img1 from '../../assets/photo.jpg'
import CV from '../../assets/gaurang.pdf'

import { useNavigate } from 'react-router-dom'


export default function Home() {

  const navigate = useNavigate();
  const GoToContect = () => {
    navigate("/contect");
  };

  return (
    <div className='container'>
      <div className='Name'>
        <h6>Hello, I'm</h6>
        <h2>Gaurang Khandhala</h2>
        <h4>Full Stack Devloper</h4>
      </div>
      <div className='social-media'>
        <a href="https://www.linkedin.com/in/khandhala-gaurang-a80075258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="bi bi-linkedin white"></i></a>
        <a href="https://x.com/Gaurangk2706?s=09">  <i className="bi bi-twitter-x white"></i></a>
        <a href="https://github.com/khandhalagaurang"><i className="bi bi-github white"></i></a>
      </div>
      <div>
        <button className='btn1'><a href={CV} download={""} className='btn1'>Download CV</a></button>&nbsp;&nbsp;&nbsp;
        <button className='btn2' onClick={GoToContect}>Contect Me</button>
      </div>
      <img src={img1} alt="" className='img1' />
      <div className='mainbox'>
        <div className='subbox'>
          <div className='box'>
            <i className="bi bi-envelope yellow icon"></i>
            <p>E-MAIL <br /> gaurangkhandhala960@gmail.com</p>
          </div>
          <div className='box'>
            <i className="bi bi-telephone-inbound yellow icon"></i>
            <p>PHONES <br /> +91 9974565947</p>
          </div>
        </div>
        <div className='subbox'>
          <div className='box'>
            <i className="bi bi-calendar-week yellow icon"></i>
            <p>BIRTH-DATE <br /> June 27,2005</p>
          </div>
          <div className='box'>
            <i className="bi bi-geo-alt yellow icon"></i>
            <p >LOCATION <br /> Ahmedabad, Gujarat </p>
          </div>
        </div>
      </div>
    </div>
  )
}
