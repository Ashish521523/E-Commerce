import React from "react";
import "./BestSale.css";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

function BestSale({ data }) {
  return (
    <>
      <div className="card_Contenar">
        <div className="flash_Sales_Contenar">
          <div className="image_Contenar">
           
            <div className="iconContenar">
              <span className="image_icone">
                <FaRegHeart className="image_size" />
              </span>
              <br />
              <span className="image_icone">
                <IoEyeOutline className="image_size" />
              </span>
            </div>
            <img src={data.image} className="flash_image" />
            <button className="addbutton2">Add To Card</button>
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

export default BestSale;
