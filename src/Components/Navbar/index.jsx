import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const {
    cartProducts,
    setOpenCheckoutSM,
    setSignOut,
  } = useContext(ShoppingCartContext);

  const activeStyle = 'underline underline-offset-4';

  const normalizeCategory = (category) => {
    return category.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
  };

  const categories = {
    "Electronics": "Electronics",
    "Jewelery": "Jewelry",
    "Men's clothing": "Men's Clothing",
    "Women's clothing": "Women's Clothing"
  };

  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = useContext.signOut || parsedSignOut

  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = useContext.account ? Object.keys(useContext.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    setSignOut(true)
  }

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className='text-black/60'>
            {parsedAccount.email}
          </li>
          <li>
            <NavLink
              to='/my-orders'
              className={({ isActive }) => isActive ? activeStyle : undefined}>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/my-account'
              className={({ isActive }) => isActive ? activeStyle : undefined}>
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) => isActive ? activeStyle : undefined}
              onClick={() => handleSignOut()}>
              Sign Out
            </NavLink>
          </li>
        </>
      )

    } else {
      return (
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => handleSignOut()}>
            Sign in
          </NavLink>
        </li>
      )
    }
  }

  return (
    <nav className='bg-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-extrabold text-lg underline decoration-pink-300'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        {Object.entries(categories).map(([routeName, displayName]) => (
          <li key={routeName}>
            <NavLink
              to={`/category/${normalizeCategory(routeName)}`}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              {displayName}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-3'>
        {renderView()}
        <li className='flex items-center cursor-pointer'>
          <ShoppingBagIcon className='w-5 h-5'
            onClick={() => setOpenCheckoutSM(state => !state)} />
          <div>{cartProducts.length}</div>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar