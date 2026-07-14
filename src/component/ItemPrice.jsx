import React, { useContext } from "react";
import "./ItemPrice.css";
import { createStore } from "./BagStore";

function ItemPrice() {
  const { addData } = useContext(createStore);

  const finalitem = addData;

  let Convenience_FEE = 99;
  let totalItem = addData.length;
  let totalMRP = 0;

  finalitem.forEach((addprice) => {
    totalMRP = Number(totalMRP + addprice.orginalPrice);
  });

  let finalPayment = Number(totalMRP + Convenience_FEE);

  return (
    <div className="item_main_contenars">
      <h3 className="item_price_heading">PRICE DETAIL</h3>

      <div className="price_contenar">
        <div className="price_fixed">
          <span>Total MRP </span>
          <span className="conveniencefee">Convenience Fee</span>
          <span>Total Amount </span>
        </div>

        <div className="price_update">
          <span>₹{totalMRP}</span>
          <span>₹99</span>
          <span>₹{finalPayment}</span>
        </div>
      </div>

      <div className="order_place_button">
        <button className="item_button">PLACE ORDER</button>
      </div>
    </div>
  );
}

export default ItemPrice;
