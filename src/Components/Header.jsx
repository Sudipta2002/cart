import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import {
    Badge,
    Button,
    Container,
    Dropdown,
    FormControl,
    Nav,
    Navbar,
  } from "react-bootstrap";
import { CartState } from '../context/Context';
const Header = () => {
  const {state:{cart},dispatch}=CartState();
  return (
    <Navbar bg='dark' variant='dark'>
        <Container>
        <Navbar.Brand ><a href='/'>
            Shopping Cart
            </a>
            </Navbar.Brand>
            <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Search a product..."
              className="m-auto"
              aria-label="Search"
            //   onChange={(e) => {
            //     productDispatch({
            //       type: "FILTER_BY_SEARCH",
            //       payload: e.target.value,
            //     });
            //   }}
            />
          </Navbar.Text>
          <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.reduce((acc,curr)=>acc+curr.qty,0)}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? 
              (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>Price- ₹ {prod.price}</span>
                        <span>Quantity- {prod.qty}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_ITEM",
                            payload: {
                              id:prod.id,
                              qty:cart[cart.findIndex((i)=>i.id==prod.id)]?.qty
                            },
                          }) 
                        }
                      />
                    </span>
                  ))}
                  <a href="/payment">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Pay {cart.reduce((acc,curr)=>acc+curr.qty*curr.price,0)}
                    </Button>
                  </a>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )} 
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        </Container>
    </Navbar>
  )
}

export default Header