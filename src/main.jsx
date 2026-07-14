import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Bag from "./component/Bag.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import ItemPrice from "./component/ItemPrice.jsx";
import HandelStore from "./component/BagStore.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/bag",
    element: (
      <>
        <Header></Header>
        <Bag></Bag>
        <ItemPrice></ItemPrice>
        <Footer></Footer>
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HandelStore>
      <RouterProvider router={router} />
    </HandelStore>
  </StrictMode>,
);
