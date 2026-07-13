import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./BestSaleHead.css";

function BastSaleHead() {
  return (
    <>
      <section className="flash-header">
        <div className="left">
          <div className="today">
            <span className="box"></span>
            <p>This Month</p>
          </div>

          <div className="flash-content">
            <h1>Best Selling Products</h1>
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

export default BastSaleHead;
