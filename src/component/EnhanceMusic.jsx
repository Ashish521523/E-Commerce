import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import "./EnhanceMusic.css";

function EnhanceMusic() {
  return (
    <>
      <section className="hero-container">
        <div className="hero-left">
          <p className="category1">Categories</p>

          <h1>
            Enhance Your
            <br />
            Music Experience
          </h1>

          <div className="timer1">
            <div className="circle">
              <h3>23</h3>
              <span>Hours</span>
            </div>

            <div className="circle">
              <h3>05</h3>
              <span>Days</span>
            </div>

            <div className="circle">
              <h3>59</h3>
              <span>Minutes</span>
            </div>

            <div className="circle">
              <h3>35</h3>
              <span>Seconds</span>
            </div>
          </div>

          <button className="buy-btn">
            <FaShoppingBag />
            Buy Now!
          </button>
        </div>

        <div className="hero-right">
          <img src="image11.png" alt="speaker" />
        </div>
      </section>
    </>
  );
}

export default EnhanceMusic;
