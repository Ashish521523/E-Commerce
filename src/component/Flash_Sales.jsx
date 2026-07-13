import React from "react";
import "./Flash_Sales.css";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

function Flash_Sales({ data }) {
  return (
    <>
      <div className="card_Contenar">
        <div className="flash_Sales_Contenar">
          <div className="image_Contenar">
            <div className="itemdiscount">
              <p1>{data.discount}</p1>
            </div>
            <div className="iconContenar1">
              <span className="image_icone">
                <FaRegHeart className="image_size" />
              </span>
              <br />
              <span className="image_icone">
                <IoEyeOutline className="image_size" />
              </span>
            </div>
            <img src={data.image} className="flash_image" />
            <button className="addbutton1">Add To Card</button>
          </div>
          <div>
            <p>{data.itemName}</p>
            <span className="item_price">{data.discountPrice}</span>
            <span className="item_price1">{data.orginalPrice}</span>
            <p>{data.reating}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flash_Sales;
