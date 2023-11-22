import { useContext } from 'react'
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)

  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)

  // Has an account
  const noAccountInLocalStorage = !parsedAccount;
  const noAccountInLocalState = !context.account;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([
    { path: '/ecommerce-practice-react-vite-tailwind/', element: <Home /> },
    { path: '/category/:category', element: <Home /> },
    { path: '/my-account', element: hasUserAnAccount && !isUserSignOut ? <MyAccount /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/my-order', element:  <MyOrder /> },
    { path: '/my-orders', element: hasUserAnAccount && !isUserSignOut ? <MyOrders /> : <Navigate replace to={'/sign-in'} />},
    { path: '/my-orders/last', element: hasUserAnAccount && !isUserSignOut ? <MyOrder /> : <Navigate replace to={'/sign-in'} /> },
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
      <BrowserRouter>
        <>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu />
        </>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App
