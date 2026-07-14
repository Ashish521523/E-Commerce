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
            <button
              className="addbutton3"
              onClick={() => {
                (HandelAddItem(data), navigat("/bag"));
              }}
            >
              Add To Card
            </button>
          </div>
          <div>
            <p>{data.itemName}</p>
            <span className="item_priceor">{data.orginalPrice}</span>

            <span className="item_priceds">{data.discountPrice}</span>
            <span className="reating">{data.reating}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProduct;
