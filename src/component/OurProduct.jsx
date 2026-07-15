import React, { useContext } from "react";
import "./OurProduct.css";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { createStore } from "./BagStore";
import { useNavigate } from "react-router-dom";

function OurProduct({ data }) {
  const { HandelAddItem } = useContext(createStore);
  const navigat = useNavigate();
  return (
    <>
      <div className="card_Contenar5">
        <div className="flash_Sales_Contenar5">
          <div className="image_Contenar5">
            <div className="iconContenar5">
              <span className="image_icone5">
                <FaRegHeart className="image_size5" />
              </span>
              <br />
              <span className="image_icone5">
                <IoEyeOutline className="image_size5" />
              </span>
            </div>
            <img src={data.image} className="flash_image5" />
            <button
              className="addbutton5"
              onClick={() => {
                (HandelAddItem(data), navigat("/bag"));
              }}
            >
              Add To Card
            </button>
          </div>
          <div>
            <p>{data.itemName}</p>
            <span className="item_priceor5">{data.orginalPrice}</span>

            <span className="item_priceds5">{data.discountPrice}</span>
            <span className="reating5">{data.reating}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProduct;
