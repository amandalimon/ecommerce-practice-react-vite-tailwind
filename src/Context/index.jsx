import React from 'react'

const ShoppingCartContext = React.createContext()

function ShoppingCartProvider ({children}) {
  const [count, setCount] = React.useState(0)
  const [productDetail, setProductDetail] = React.useState(false)

  const openProductDetail = () => setProductDetail(true)
  const closeProductDetail = () => setProductDetail(false)


  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      productDetail,
      openProductDetail,
      closeProductDetail,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export {ShoppingCartContext, ShoppingCartProvider}
