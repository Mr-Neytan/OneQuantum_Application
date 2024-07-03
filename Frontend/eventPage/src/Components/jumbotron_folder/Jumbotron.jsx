import React from 'react'
import "./Jumbotron.css"

const Jumbotron = () => {
  return (
    <div className='hero section-jumbotron'>
        <h1 className='hidden show'>
            Quantum Quest</h1>
        <h1 className='hidden show purple'>
          Workshop On Quantum Computing
        </h1>
        <p className='caption hidden show'>A DISCUSSION ON QUANTUM COMPUTING'S MODERN APPLICATIONS</p>
        <p className='caption hidden show'>NATIONAL INSTITUTE OF PHYSICS</p>
        <p className='caption hidden show'>12 SEPTEMBER 2024</p>
        
    </div>
  )
}

export default Jumbotron