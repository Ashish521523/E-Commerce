import React, { useContext } from "react";
import "./Flash_Sales.css";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { createStore } from "./BagStore";
import { useNavigate } from "react-router-dom";

function Flash_Sales({ data }) {
  const navigat = useNavigate();
  const { HandelAddItem } = useContext(createStore);
  return (
    <>
      <div className="card_Contenar1">
        <div className="flash_Sales_Contenar1">
          <div className="image_Contenar1">
            <div className="itemdiscount1">
              <p1>{data.discount}</p1>
            </div>
            <div className="iconContenar1">
              <span className="image_icone1">
                <FaRegHeart className="image_size1" />
              </span>
              <br />
              <span className="image_icone1">
                <IoEyeOutline className="image_size1" />
              </span>
            </div>
            <img src={data.image} className="flash_image1" />
            <button
              className="addbutton1"
              onClick={() => {
                (HandelAddItem(data), navigat("/bag"));
              }}
            >
              Add To Card
            </button>
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
