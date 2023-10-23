import React from 'react'
import { ShoppingCartContext } from '../../Context'
import {XMarkIcon} from '@heroicons/react/24/solid'
import './styles.css'

function ProductDetail() {
    const {
        productDetail,
        closeProductDetail,
        productToShow,
    }= React.useContext(ShoppingCartContext);

    return (
        <aside className={`${productDetail ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-gray-500 rounded-lg bg-white overflow-auto`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Details</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'
                    onClick={()=>closeProductDetail()}>
                    </XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                <img className= 'w-full h-full rounded-lg' 
                src={productToShow.image} 
                alt={productToShow.title}/>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>
                    ${productToShow.price}</span>
                <span className='font-medium text-md'>
                    {productToShow.title}</span>
                <span className='font-light text-sm'>
                    {productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail

