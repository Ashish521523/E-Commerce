import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import OurProduct from "./OurProduct";
import { productitem } from "../ProductData/OurProduct";

function OurProductContenar() {
  return (
    <>
      <div className="item_main_contenar5">
        {productitem.map((data) => (
          <OurProduct key={data.name} data={data}>
            {data}
          </OurProduct>
        ))}
      </div>
      <div className="viewbuttonContenar5">
        <button className="viewbutton5">View All Products</button>
      </div>
    </>
  );
}

export default OurProductContenar;
