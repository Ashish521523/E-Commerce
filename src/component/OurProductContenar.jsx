import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import OurProduct from "./OurProduct";
import { productitem } from "../ProductData/OurProduct";

function OurProductContenar() {
  return (
    <>
      <div className="item_main_contenar">
        {productitem.map((data) => (
          <OurProduct key={data.name} data={data}>
            {data}
          </OurProduct>
        ))}
      </div>
      <div className="viewbuttonContenar">
        <button className="viewbutton">View All Products</button>
      </div>
    </>
  );
}

export default OurProductContenar;
