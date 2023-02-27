import React, {useEffect} from "react";
import "./Tour.css";

import tourImage1 from "../assets/tour.jpg";
import tourImage2 from "../assets/paris.jpg";

import { AiFillStar } from "react-icons/ai";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Tour = () => {
  useEffect(() =>{
    Aos.init({duration:2000})
  }, [])


  return (
    <div className="tours container section">
      <div className="secContainer">
        <span className="secTitle">Hot Tours</span>

        <div className="tourContainer">
          <div data-aos='fade-up' data-aos-duration='2000'  className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage1} />
            </div>

            <div data-aos='fade-up' data-aos-duration='2500'  className="tourInfo">
              <span className="tourTitle">Spain, Benidrom</span>

              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                </div>

                <small className="custReview">10 Customers Review</small>
              </div>

              <p>
                Spain, a country on Europe’s Iberian Peninsula, includes 17
                autonomous regions with diverse geography and cultures. Capital
                city Madrid is home to the Royal Palace and Prado museum,
                housing works by European masters. Segovia has a medieval castle
                (the Alcázar) and an intact Roman aqueduct.
              </p>
              <button className="btn">Buy This Tour</button>
            </div>
            <span className="price">$790</span>
          </div>

          <div data-aos='fade-up' data-aos-duration='3000'  className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage2} />
            </div>

            <div data-aos='fade-up' data-aos-duration='3500'  className="tourInfo">
              <span className="tourTitle">France, Paris</span>

              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                </div>

                <small className="custReview">6 Customers Review</small>
              </div>

              <p>
                France, in Western Europe, encompasses medieval cities, alpine
                villages and Mediterranean beaches. Paris, its capital, is famed
                for its fashion houses, classical art museums including the
                Louvre and monuments like the Eiffel Tower. The country is also
                renowned for its wines and sophisticated cuisine.
              </p>
              <button className="btn">Buy This Tour</button>
            </div>
            <span className="price">$850</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
