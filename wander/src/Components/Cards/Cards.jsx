import React, {useEffect} from 'react'
import './Cards.css'

import cardImage from '../assets/balloon.jpg'
import cardImage1 from '../assets/beach.jpg'
import cardImage2 from '../assets/mountain.jpg'
import cardImage3 from '../assets/historical.jpg'

import { AiOutlineSwapRight } from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Cards = () => {
  useEffect(() =>{
    Aos.init({duration:2000})
  }, [])

  return (
    <div className='cards'>
      <div data-aos='fade-up' data-aos-duration='2000' className="cardContainer container grid">
        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage} alt="" />
          </div>
          <h4 className="textDiv">
            Balloon Flight
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage1} alt="" />
          </div>
          <h4 className="textDiv">
            Beach Travels
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage2} alt="" />
          </div>
          <h4 className="textDiv">
            Mountains Tour
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={cardImage3} alt="" />
          </div>
          <h4 className="textDiv">
            Historical View
          </h4>
        </div>
      </div>
      <div className="spanText flex">
        Other Tours <AiOutlineSwapRight className='icon'/>
      </div>
    </div>
  )
}

export default Cards
