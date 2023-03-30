import React, { Children, createContext, useContext, useReducer } from 'react'
import { cartReducers } from './Reducers';
// import faker from "faker";
const Cart = createContext();
const Context = ({children}) => {
    const products = [{
        id: 1,
        name: "hv",
        price: 200,
      },{
        id: 2,
        name: "hasdv",
        price: 300,
      },{
        id: 3,
        name: "asd",
        price: 500,
      }];
    //   console.log(products)
    const [state, dispatch] = useReducer(cartReducers,{ products:products, cart:[]});
    // increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
  return (
    <Cart.Provider value={{state,dispatch,increment,decrement}}>{children}</Cart.Provider>
  )
}

export default Context

export const CartState=()=>{
    return useContext(Cart);
}