import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const ShoppingCartContext = React.createContext();

function ShoppingCartProvider({ children }) {

  // Product Detail
  const [openModal, setOpenModal] = useState(false);
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart
  const [cartProducts, setCartProducts] = useState([]);
  const [openCheckoutSM, setOpenCheckoutSM] = useState(false);

  // Shopping Cart · Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])


  return (
    <ShoppingCartContext.Provider value={{
      openModal,
      setOpenModal,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      openCheckoutSM,
      setOpenCheckoutSM,
      order,
      setOrder,
      items,
      setItems,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider }
