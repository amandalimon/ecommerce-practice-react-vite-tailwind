import React from 'react'
import { ShoppingCartContext } from '../../Context'
import {XMarkIcon} from '@heroicons/react/24/solid'
import './styles.css'

function CheckoutSideMenu() {
    const {
        CheckoutSideMenu,
        closeCheckoutSideMenu,
    }= React.useContext(ShoppingCartContext);

    return (
        <aside className={`${CheckoutSideMenu ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-gray-500 rounded-lg bg-white overflow-auto`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'
                    onClick={()=>closeCheckoutSideMenu()}>
                    </XMarkIcon>
                </div>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu