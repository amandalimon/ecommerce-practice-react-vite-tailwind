import React from 'react'
import { ShoppingCartContext } from '../../Context'
import {XMarkIcon} from '@heroicons/react/24/solid'
import OrderCard from '../../Components/OrderCard'
import './styles.css'

function CheckoutSideMenu() {
    const {
        CheckoutSideMenu,
        closeCheckoutSideMenu,      
        cartProducts, 
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
            <div className='px-6'> {
                cartProducts.map(data => (
                    <OrderCard 
                        key={data.id}
                        title={data.title}
                        image={data.image}
                        price={data.price}
                    />
                ))}
            </div>
        </aside>
    )
}

export default CheckoutSideMenu