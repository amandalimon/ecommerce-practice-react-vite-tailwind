import { useContext } from 'react'
import { HashRouter, Navigate, useRoutes } from 'react-router-dom'
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)

  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)

  // Has an account
  const isUserSignOut = context.signOut || parsedSignOut


  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true

  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/category/:category', element: <Home /> },
    { path: '/my-account', element: hasUserAnAccount && !isUserSignOut ? <MyAccount /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: hasUserAnAccount && !isUserSignOut ? <MyOrders /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-orders/last', element: hasUserAnAccount && !isUserSignOut ? <MyOrder key="last" id="last" /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

function App() {
  initializeLocalStorage()

  return (
    <ShoppingCartProvider>
      <HashRouter>
        <>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </>
      </HashRouter>
    </ShoppingCartProvider>
  );
}

export default App