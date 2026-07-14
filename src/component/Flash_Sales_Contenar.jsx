import React from "react";
import Flash_Sales from "./Flash_Sales";
import { item } from "../ProductData/Flash_SaleData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function Flash_Sales_Contenar() {
  return (
    <>
      <div className="item_main_contenar">
        {item.map((data) => (
          <Flash_Sales key={data.itemName} data={data}>
            {data}
          </Flash_Sales>
        ))}
      </div>
      <div className="viewbuttonContenar">
        <button className="viewbutton">View All Products</button>
      </div>
    </>
  );
}

export default Flash_Sales_Contenar;
