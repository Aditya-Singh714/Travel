import React, {useEffect} from 'react'
import './Discount.css'

import beach from '../assets/video2.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Discount = () => {
  useEffect(() =>{
    Aos.init({duration:2000})
  }, [])

  return (
    <div className='discount section'>
      <div className="secContainer">
        <video src={beach} autoPlay loop muted typeof='mp4'></video>
        <div className="textDiv">
          <span data-aos='fade-up' data-aos-duration='2000' className="title">
            Sign Up for 35% Discount
          </span>
          <p data-aos='fade-up' data-aos-duration='2500'>
            Want to get an instant discount for your next tour
            to any of your favourite destinations.
          </p>

          <div data-aos='fade-up' data-aos-duration='3000' className="input_btn flex">
            <input type="text" placeholder='Enter your E-mail' />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Discount
