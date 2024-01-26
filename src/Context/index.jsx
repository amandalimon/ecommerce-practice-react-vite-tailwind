import { createContext, useState, useEffect } from 'react'

const ShoppingCartContext = createContext();

const initializeLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem('account')
  const signOutInLocalStorage = localStorage.getItem('sign-out')
  let parsedAccount
  let parsedSignOut

  if (!accountInLocalStorage) {
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage)
  }

  if (!signOutInLocalStorage) {
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  } else {
    parsedSignOut =JSON.parse(signOutInLocalStorage)
  }
}

function ShoppingCartProvider({ children }) {

  // My account
  const [account, setAccount] = useState({})

  // Sign out
  const [signOut, setSignOut] = useState(false)

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
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
      account,
      setAccount,
      signOut,
      setSignOut,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export { ShoppingCartContext, ShoppingCartProvider, initializeLocalStorage }