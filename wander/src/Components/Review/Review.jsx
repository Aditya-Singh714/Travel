import React, {useEffect} from "react";
import "./Review.css";

import user1 from "../assets/user2.jpg";
import user2 from "../assets/user1.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Review = () => {
  useEffect(() =>{
    Aos.init({duration:2000})
  }, [])

  return (
    <div className="review section">
      <div className="secContainer">
        <span className="secTitle">What Peolpe Say</span>

        <div className="reviewContainer review grid">
          <div data-aos='fade-up' data-aos-duration='3000' className="singleReview">
            <div className="imgDiv">
              <img src={user1} alt="" />
            </div>
            <p>
              I had lots of fun on my trip to Spain. Besides visiting family, I
              also went to different parts of Spain like Madrid, Fuentenovilla,
              Malaga, Getafe, Torre Molinos, and many other smaller cities. I
              had a blast.
            </p>

            <div className="name">Richard Parker</div>
          </div>

          <div data-aos='fade-up' data-aos-duration='3500' className="singleReview">
            <div className="imgDiv">
              <img src={user2} alt="" />
            </div>
            <p>
              What a place, the history, architecture and culture is wonderful.
              So many sites to see, one more amazing then the next. A must see
              if you are going to visit the great cities of the world.
            </p>

            <div className="name">Eva Addams</div>
          </div>

          <div data-aos='fade-up' data-aos-duration='4000' className="singleReview">
            <div className="imgDiv">
              <img src={user3} alt="" />
            </div>
            <p>
              I have to say this was one trip that I will never forget. Italy is
              a great country to visit if you never have been there. Being able
              to go with two other girl friends which we have all known each
              other for 25 years was incredible. It was a dream come true.
            </p>

            <div className="name">Kristeen Willianson</div>
          </div>

          <div className="singleReview">
            <div className="imgDiv">
              <img src={user4} alt="" />
            </div>
            <p>
              Had a grant time in Hawaii, traveled with 16 of the best people
              for my birthday extravaganza...we opted to stay in a house as
              oppose to a hotel, while the houses where great, it just made me
              feel like I was home. I would go back to Hawaii in a heart beat,
              but I would definitely stay on the strip, so I can be in the
              know!!!! Hawaii Rocks.....!!!!!!!!!!!!!!!!!!
            </p>

            <div className="name">Micheal Johnson</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
