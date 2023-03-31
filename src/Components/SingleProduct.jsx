import React from 'react'
import { Card, Button } from "react-bootstrap";
import { CartState } from '../context/Context';
import  './styles.css';import { TfiMinus,TfiPlus } from "react-icons/tfi";
const SingleProduct = ({prod}) => {
    const {state:{cart},dispatch}=CartState();
    // console.log(cart);
    const addUp=()=>{

    }
  return (
    <div className='products'>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            
          </Card.Subtitle>
          
          {cart.some((p) => p.id === prod.id) ? (
            // <Button
            //   variant="danger"
            //   onClick={() =>
            //     dispatch({
            //       type: "REMOVE_FROM_CART",
            //       payload: prod,
            //     }) 
            //   }
            // >
            //   Remove from Cart
            // </Button>
            <div className="add-minus-quantity"> 
            <TfiPlus size={50} onClick={() =>
                  dispatch({
                    type: "UPDATE_CART",
                    payload: {
                      id:prod.id,
                      qty:cart[cart.findIndex((i)=>i.id==prod.id)]?.qty
                    },
                  })} className="plus"/>
            <input type="text" placeholder={cart[cart.findIndex((i)=>i.id==prod.id)]?.qty} disabled />
            <TfiMinus className="plus" size={50}onClick={() =>
                  dispatch({
                    type: "REMOVE_ITEM",
                    payload: {
                      id:prod.id,
                      qty:cart[cart.findIndex((i)=>i.id==prod.id)]?.qty
                    },
                  }) 
                  
                }/>
            {/* {console.log(cart)} */}
        </div>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
            >
              Add to Cart
            </Button>
          )}
         
        </Card.Body>        
        </div>
  ) 
}

export default SingleProduct