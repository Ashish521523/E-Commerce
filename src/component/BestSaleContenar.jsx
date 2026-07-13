import React from "react";
import BestSale from "./BestSale";
import { saleitem } from "../ProductData/BestSale";


function BestSaleContenar() {
  return (
    <>
      <div className="item_main_contenar">
        {saleitem.map((data) => (
          <BestSale key={data.name} data={data}>
            {data}
          </BestSale>
        ))}
      </div>
    
    </>
  );
}

export default BestSaleContenar;
