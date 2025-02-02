import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
    
    <div class="section">
      <div className='content'>
        <p className='caption'>ABOUT THE WORKSHOP</p>
        <p className="large">This workshop intends to inform people about Quantum Computing's potential in Machine Learning and Problem Solving. 
          The main goal of the workshop is to raise awareness and interest in quantum computing, its power to solve interesting problems and its limitations.
          </p>
        <p className="large">
        We hope to provide a friendly atmosphere during the workshop 
        for individuals or group of individuals to share their output and experiences working on quantum computing. 
        This maiden workshop aims to prepare participants in understanding and appreciation of the power of quantum 
        computing through a short tutorial on quantum algorithm and programming.
        </p>

        <button className='gradient-button'>
                Register Now!
        </button>
        </div>
    </div>
    </>
  )
}

export default About