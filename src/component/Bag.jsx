import { useContext } from "react";
import "./Bag.css";
import { MdDelete } from "react-icons/md";
import { createStore } from "./BagStore";

function Bag() {
  const { addData, HandelDelete } = useContext(createStore);
  return (
    <>
      <div className="bag_main_contenar">
        <h1>Total Items: {addData.length}</h1>
        {addData.map((item) => (
          <div className="bag_contenar">
            <img src={item.image} className="bag_img" />
            <div className="bagitem_contenar">
              <div>
                <h3 className="bag_item_name">{item.itemName}</h3>
                <p className="bagitem_price">Rs.{item.orginalPrice}</p>
                <p className="bag_item_return">14 days return available</p>
                <p className="bag_item_return">Delivery by 17 JUNE 2026</p>
              </div>
              <span onClick={() => HandelDelete(item)}>
                <MdDelete className="bag_button" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Bag;
