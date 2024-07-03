import React from 'react'
import "./navbar.css"
import "/onequantum_logo.png"


const Navigation_Bar = () => {
  return (
    <div className='nav-container'>
        <div>
                <img src={"/onequantum_logo.png"} className='logo'></img>
                <a href="#">About</a>
                <a href="#">FAQs</a>
                <a href="#">Merch</a>

        </div>
            <div>
            <button className='gradient-button disappear'>
                Contact Us
            </button>
            </div>
    </div>
  )
}

export default Navigation_Bar