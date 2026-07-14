import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Sale from "./component/Sale";
import Flash_Sales from "./component/Flash_Sales";
import Flash_Sales_Contenar from "./component/Flash_Sales_Contenar";
import CategoryHead from "./component/CategoryHead";
import CategoryItem from "./component/CategoryItem";
import BastSaleHead from "./component/BastSaleHead";
import BestSaleContenar from "./component/BestSaleContenar";
import EnhanceMusic from "./component/EnhanceMusic";
import OurProductHead from "./component/OurProductHead";
import OurProductContenar from "./component/OurProductContenar";
import NewArrival from "./component/NewArrival";
import NewArrivalHead from "./component/NewArrivalHead";
import Support from "./component/Support";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Sale></Sale>
      <Flash_Sales_Contenar></Flash_Sales_Contenar>
      <CategoryHead></CategoryHead>
      <CategoryItem></CategoryItem>
      <BastSaleHead></BastSaleHead>
      <BestSaleContenar></BestSaleContenar>
      <EnhanceMusic></EnhanceMusic>
      <OurProductHead></OurProductHead>
      <OurProductContenar></OurProductContenar>
      <NewArrivalHead></NewArrivalHead>
      <NewArrival></NewArrival>
      <Support></Support>

      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
