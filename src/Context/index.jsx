import React from 'react'
import {useState} from 'react'

const ShoppingCartContext = React.createContext()

function ShoppingCartProvider ({children}) {
  // Shopping Cart · Counter
  const [count, setCount] = React.useState(0)
  
  // Product Detail · Open/Close
  const [productDetail, setProductDetail] = React.useState(false)
  const openProductDetail = () => setProductDetail(true)
  const closeProductDetail = () => setProductDetail(false)

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({})

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      productDetail,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export {ShoppingCartContext, ShoppingCartProvider}
