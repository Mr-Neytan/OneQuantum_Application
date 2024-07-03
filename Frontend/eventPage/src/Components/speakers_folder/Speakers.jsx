import React from 'react'
import "/speaker_picture.png"
import "./Speakers.css"

const Speakers = () => {
  return (
    <div className='section'>
    <div className='speaker-container'>
    
    <img src={"/speaker_picture.png"} width={"300px"} margin={"2rem"} ></img>
   
    <div className='speaker'>
      <p className='caption'>Keynote Speaker</p>
      <br></br>
      <h2>John Doe</h2>
      <br></br>
      <h3>Revisiting Machine Learning Through a Quantum Computing Lens</h3>
      <br></br>
      <p className='large-center'>This presentation provides a conceptual discussion on quantum computing. It specifically tackles machine Learning
        and the travelling salesman problem while remaining digestible to the average pedestrian. </p>
    </div>
   
    </div>
    </div>
  )
}

export default Speakers