import React from 'react'
import { ShoppingCartContext } from '../../Context'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

function Card({ data }) {
    const {
        setOpenModal,
        setProductToShow,
        cartProducts,
        setCartProducts,
        setOpenCheckoutSM,
    } = React.useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        setOpenModal(state => !state);
        setProductToShow(productDetail);
    };

    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        const isInCart = cartProducts.some(product => product.id === productData.id);

        if (isInCart) {
            const updatedCart = cartProducts.filter(product => product.id !== productData.id);
            setCartProducts(updatedCart);
        } else {
            productData.quantity = 1;
            setCartProducts([...cartProducts, productData]);
            setOpenCheckoutSM(true);
        }
    };

    const renderIcon = (id) => {
        const isInCart = cartProducts.some(product => product.id === id);

        return (
            <button
                className={`absolute top-0 right-0 font-light rounded-full w-6 h-6 flex justify-center items-center m-2 hover:scale-110 ${isInCart ? 'bg-green-300' : 'bg-white border border-black/50'
                    }`}
                onClick={(event) => addProductsToCart(event, data)}
            >
                {isInCart ? (
                    <CheckIcon className='w-4 h-4 text-white' />
                ) : (
                    <PlusIcon className='w-4 h-4 text-black' />
                )}
            </button>
        );
    };

    return (
        <div className='bg-white w-56 h-60 rounded-lg p-2 shadow-xl'>

            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data.category}
                </span>
                <img className='w-full h-full object-contain'
                    src={data.image} alt="product"
                />
                {renderIcon(data.id)}
            </figure>

            <p className='flex justify-between' onClick={() => showProduct(data)}>
                <span className='cursor-pointer mr-2 text-sm truncate'>
                    {data.title}
                </span>
                <span className='cursor-pointer text-lg font-medium'>
                    ${data.price}
                </span>
            </p>
        </div>
    )
}

export default Card