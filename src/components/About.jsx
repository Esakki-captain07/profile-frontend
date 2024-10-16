import React from 'react'
import placeholder from './img/photo.JPG.png'
import Education from './Education'

function About() {
  return<>
  <div id='about' className="container about-me">
    <div className="about-left">
        <h2 className='about-name'>About Me</h2>
        <div className='about-text'>
            <ul style={{marginBottom:'20px'}} className='about-des'>
                <li>Hello! My name is Esakki Raj, and I’m a MERN stack developer who loves building things that make the web a better place.
                   My journey into web development. Whether it's crafting responsive interfaces or optimizing backend performance, I enjoy every aspect of the development process.
                   I believe in creating applications that are not only functional but also user-centered and accessible.
                </li>
                <li>When I’m not coding, you can find me exploring new technologies, reading about the latest trends in web development, or contributing to open-source projects.
                   I believe that continuous learning is essential in this fast-paced industry, and I’m always eager to expand my skill set
                </li>
                <li>In my free time, I enjoy collaborating with fellow developers and participating in hackathons.
                   I love the energy of working together to create innovative solutions and pushing the boundaries of what's possible on the web.
                </li>
            </ul>
        </div>

    </div>
<div className="about-rigt">
<img src={placeholder} oncontextmenu="return false;" draggable="false" className='placeholder'/>

</div>

  </div>


  
  </>
}

export default About
