import React from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'


function Card({ data }) {
    const {
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
    } = React.useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        openProductDetail()
        setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        setCount(count + 1)
        setCartProducts([...cartProducts, productData])
        openCheckoutSideMenu();
        closeProductDetail();
        console.log('CART: ', cartProducts)
    }

    const renderIcon = (id) => {
        const isInCart = cartProducts.some(product=> product.id === id);         
        return (
            isInCart ? (
                <button className='absolute top-0 right-0 font-light bg-lime-500/50 rounded-full w-6 h-6 flex justify-center items-center m-2 hover:scale-110'>
                    <CheckIcon className='w-4 h-4 text-white' />
                </button>
            )
                : (
                    <button className='absolute top-0 right-0 font-light bg-white border border-gray-500 rounded-full w-6 h-6 flex justify-center items-center m-2 hover:scale-110'>
                        <PlusIcon className='w-4 h-4 text-black'
                        onClick={(event) => addProductsToCart(event, data)} />
                    </button>
                )
        );
    }

    return (
        <div
            className='bg-white cursor-pointer w-56 h-60 rounded-lg p-2'
            onClick={() => showProduct(data)}>

            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data.category}
                </span>
                <img className='w-full h-full object-contain'
                    src={data.image} alt="product" />
                
                {renderIcon(data.id)}

            </figure>

            <p className='flex justify-between'>
                <span className='mr-2 text-sm truncate'>
                    {data.title}
                </span>
                <span className='text-lg font-medium'>
                    ${data.price}
                </span>
            </p>
        </div>
    )
}

export default Card