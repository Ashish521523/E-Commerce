import React from "react";
import './Support.css'
import {
  FaShippingFast,
  FaHeadphonesAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Support() {
  return (
    <>
      <section className="service-section">
        <div className="service-card">
          <div className="service-icon">
            <FaShippingFast />
          </div>

          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaHeadphonesAlt />
          </div>

          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaCheckCircle />
          </div>

          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>
      </section>
    </>
  );
}

export default Support;
