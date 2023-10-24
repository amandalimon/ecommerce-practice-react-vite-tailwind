import React from 'react'
import {useState} from 'react'

const ShoppingCartContext = React.createContext();

function ShoppingCartProvider ({children}) {
  // Shopping Cart · Counter
  const [count, setCount] = React.useState(0);

  // Shopping Cart · Add products
  const [cartProducts, setCartProducts] = useState([]);

  // Product Detail · Open/Close
  const [productDetail, setProductDetail] = React.useState(false);
  const openProductDetail = () => setProductDetail(true);
  const closeProductDetail = () => setProductDetail(false);

  // Checkout Side Menu · Open/Close
  const [CheckoutSideMenu, setCheckoutSideMenu] = React.useState(false);
  const openCheckoutSideMenu = () => setCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setCheckoutSideMenu(false);

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      productDetail,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts, 
      setCartProducts,
      CheckoutSideMenu,
      setCheckoutSideMenu,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export {ShoppingCartContext, ShoppingCartProvider}
