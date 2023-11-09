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
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle])

 

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
      searchByTitle,
      setSearchByTitle,
      filteredItems,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider }
