import "./Bag.css";
import { MdDelete } from "react-icons/md";

function Bag() {
  return (
    <>
      <div className="bag_main_contenar">
        <h1>Total Items: 1</h1>

        <div className="bag_contenar">
          <img src="image21.png" className="bag_img" />
          <div className="bagitem_contenar">
            <div>
              <h3 className="bag_item_name">xyz</h3>
              <p className="bagitem_price">Rs.1234</p>
              <p className="bag_item_return">14 days return available</p>
              <p className="bag_item_return">Delivery by 17 JUNE 2026</p>
            </div>
            <span onClick={console.log("click")}>
              <MdDelete className="bag_button" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bag;
