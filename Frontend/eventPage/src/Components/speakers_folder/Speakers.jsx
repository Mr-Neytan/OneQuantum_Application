import React from 'react'
import "/speaker_picture.png"
import "./Speakers.css"

const Speakers = () => {
  return (
    <div className='section'>
    <div className='speaker-container'>
    <p className='caption'>Keynote Speaker</p>
    <br></br>
    <br></br>
    <img src={"/speaker_picture.png"} width={"300px"} height={"300px"}></img>
    <div className='speaker'>
      <br></br>
      <br></br>
      <h2>John Doe</h2>
      <br></br>
      <br></br>
      <h3>Revisiting Machine Learning Through a Quantum Computing Lens</h3>
    </div>
   
    </div>
    </div>
  )
}

export default Speakers