import React from 'react'
import {useState} from 'react'

const ShoppingCartContext = React.createContext();

function ShoppingCartProvider ({children}) {

  // Product Detail
  const [openModal, setOpenModal] = React.useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [openProductDetail, setOpenProductDetail] = React.useState(false);

  // Shopping Cart
  const [cartProducts, setCartProducts] = useState([]);
  const [openCheckoutSM, setOpenCheckoutSM] = React.useState(false);

  return (
    <ShoppingCartContext.Provider value={{
      openModal,
      setOpenModal,
      productToShow,
      setProductToShow,
      openProductDetail,
      setOpenProductDetail,
      cartProducts, 
      setCartProducts,
      openCheckoutSM,
      setOpenCheckoutSM,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export {ShoppingCartContext, ShoppingCartProvider}
