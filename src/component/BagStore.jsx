import { createContext, useReducer } from "react";

export const createStore = createContext([]);

const HandelReducer = (current, action) => {
  let newitem = current;
  if (action.type === "ADD_ITEM") {
    newitem = [...current, action.payload];
  } else if (action.type === "DELETE_ITEM") {
    newitem = current.filter(
      (removeitem) => removeitem !== action.payload.remove,
    );
  }
  return newitem;
};

const HandelStore = ({ children }) => {
  const [addData, dispachAddData] = useReducer(HandelReducer, []);
  const HandelAddItem = (Additem) => {
    dispachAddData({
      type: "ADD_ITEM",
      payload: Additem,
    });
  };

  const HandelDelete = (remove) => {
    dispachAddData({
      type: "DELETE_ITEM",
      payload: {
        remove,
      },
    });
    console.log("click");
  };
  return (
    <>
      <createStore.Provider value={{ addData, HandelAddItem, HandelDelete }}>
        {children}
      </createStore.Provider>
    </>
  );
};

export default HandelStore;
