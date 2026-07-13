import "./NewArrival.css";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function NewArrival() {
  return (
    <section className="featured">
      {/* Left */}
      <div className="playstation card">
        <img src="/image19.png" alt="PlayStation" />

        <div className="content">
          <h2>PlayStation 5</h2>
          <p>Black and White version of the PS5 coming out on sale.</p>

          <a href="#">
            Shop Now <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="right">
        {/* Women */}
        <div className="women card">
          <img src="/image20.jpg" alt="Women's Collection" />

          <div className="content">
            <h3>Women's Collections</h3>

            <p>
              Featured woman collections that give you another vibe.
            </p>

            <a href="#">
              Shop Now <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="bottom">
          {/* Speaker */}
          <div className="speaker card">
            <img src="/image21.png" alt="Speaker" />

            <div className="content">
              <h3>Speakers</h3>

              <p>Amazon wireless speakers</p>

              <a href="#">
                Shop Now <FaArrowRight />
              </a>
            </div>
          </div>

          {/* Perfume */}
          <div className="perfume card">
            <img src="/image22.png" alt="Perfume" />

            <div className="content">
              <h3>Perfume</h3>

              <p>GUCCI INTENSE OUD EDP</p>

              <a href="#">
                Shop Now <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArrival;