import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const {
    cartProducts,
    setOpenCheckoutSM,
  } = React.useContext(ShoppingCartContext);

  const normalizeCategory = (category) => {
    return category.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
  };

  const categories = [
    "Electronics",
    "Jewelery",
    "Men's clothing",
    "Women's clothing"
  ];

  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className='bg-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg text-pink'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        {categories.map(category => (
          <li key={category}>
            <NavLink
              to={`/category/${normalizeCategory(category)}`}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              {category}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          amandalimon@outlook.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center cursor-pointer'>
          <ShoppingBagIcon className='w-6 h-6'
            onClick={() => setOpenCheckoutSM(state => !state)} />
          <div>{cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar