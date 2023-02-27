import React, {useEffect} from 'react'
import './Staff.css'

import staff1 from '../assets/staff1.jpg'
import staff2 from '../assets/staff3.jpg'
import staff3 from '../assets/staff2.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Staff = () => {
  useEffect(() =>{
    Aos.init({duration:2000})
  }, [])

  return (
    <div className='staff container section'>
      <div className="secContainer">
        <span className="secTitle">
          Different People - One Mission
        </span>

        <div className="staffContainer grid">
          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={staff1} alt="" />
            </div>

            <span className="name">
              Nicole Love
            </span>
            <span className="jobTitle">
              CEO Wonder
            </span>
            <span className="contact">
              +344 980 4584 20
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={staff2} alt="" />
            </div>

            <span className="name">
              Mel Gupta
            </span>
            <span className="jobTitle">
              Software Engineer
            </span>
            <span className="contact">
              +345 361 2584 20
            </span>
          </div>

          <div data-aos='fade-up' data-aos-duration='000' className="singleStaff">
            <div className="imgDiv">
              <img src={staff3} alt="" />
            </div>

            <span className="name">
              Maria Nicolson
            </span>
            <span className="jobTitle">
              IT Speacialist
            </span>
            <span className="contact">
              +344 980 4585 80
            </span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Staff
