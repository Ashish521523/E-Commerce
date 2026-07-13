import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./OurProductHead.css";

function OurProductHead() {
  return (
    <>
      <section className="flash-header">
        <div className="left">
          <div className="today">
            <span className="box"></span>
            <p>Our Products</p>
          </div>

          <div className="flash-content">
            <h1>Explore Our Products</h1>
          </div>
        </div>

        <div className="arrows">
          <button>
            <FaArrowLeft />
          </button>

          <button>
            <FaArrowRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default OurProductHead;
