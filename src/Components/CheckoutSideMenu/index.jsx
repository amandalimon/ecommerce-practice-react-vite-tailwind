import React from 'react'
import {ShoppingCartContext} from '../../Context'
import OrderCard from '../../Components/OrderCard'
import {XMarkIcon} from '@heroicons/react/24/solid'
import {totalPrice} from '../../utils'
import './styles.css'

function CheckoutSideMenu() {
    const {
        openCheckoutSM,
        setOpenCheckoutSM,
        cartProducts,
        setCartProducts,
    }= React.useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(data => data.id != id)
        setCartProducts(filteredProducts)
      }

    const increaseQuantity = (id, quantity) => {
        const productCart = cartProducts.find(cartItem => cartItem.id === id);
        productCart.quantity += 1;
        setCartProducts([...cartProducts]);
      }

      const decreaseQuantity = (id, quantity) => {
        const deletedProduct = cartProducts.filter(product => product.id != id);
        const productCart = cartProducts.find(cartItem => cartItem.id === id);
        productCart.quantity -= 1;
        setCartProducts([...cartProducts]); 
        if (productCart.quantity === 0){
          setCartProducts(deletedProduct);
        } 
      }

    return (
        <aside className={`${openCheckoutSM ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-gray-500 rounded-lg bg-white overflow-auto`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'
                    onClick={()=>setOpenCheckoutSM()}
                    />
                </div>
            </div>
            <div className='px-6'> {
                cartProducts.map(data => (
                    <OrderCard 
                        key={data.id}
                        id={data.id} 
                        title={data.title}
                        image={data.image}
                        price={data.price}
                        handleDelete={handleDelete}
                        quantity={data.quantity}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                    />
                ))}
            </div>
            <div className='flex justify-between px-6'>
                <span className='font-light'>Total:</span>             
                <span className='text-md text-xl font-medium'>${totalPrice(cartProducts)}</span>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu