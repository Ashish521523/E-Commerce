import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./CategoryHead.css";

function CategoryHead() {
  return (
    <section className="flash-header">
      <div className="left">
        <div className="today">
          <span className="box"></span>
          <p>Categories</p>
        </div>

        <div className="flash-content">
          <h1>Browse By Category</h1>
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
  );
}

export default CategoryHead;