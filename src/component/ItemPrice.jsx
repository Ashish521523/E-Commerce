// import React, { useContext } from "react";
import "./ItemPrice.css";
// import { Bagitem } from "./BagStore";

function ItemPrice() {
  // const { additem } = useContext(Bagitem);

  // const finalitem = additem;

  // let Convenience_FEE = 99;
  // let totalItem = additem.length;
  // let totalMRP = 0;

  // finalitem.forEach((bagitem) => {
  //   totalMRP = Number(totalMRP + bagitem.Rs);
  // });

  // let finalPayment = Number(totalMRP + Convenience_FEE);

  return (
    <div className="item_main_contenars">
      <h3 className="item_price_heading">PRICE DETAIL</h3>

      <div className="price_contenar">
        <div className="price_fixed">
          <span>Total MRP</span>
          <span className="conveniencefee">Convenience Fee</span>
          <span>Total Amount</span>
        </div>

        <div className="price_update">
          <span>₹111</span>
          <span>₹99</span>
          <span>₹111</span>
        </div>
      </div>

      <div className="order_place_button">
        <button className="item_button">PLACE ORDER</button>
      </div>
    </div>
  );
}

export default ItemPrice;
