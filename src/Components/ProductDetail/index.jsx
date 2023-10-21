import React from 'react'
import { ShoppingCartContext } from '../../Context'
import {XMarkIcon} from '@heroicons/react/24/solid'
import './styles.css'

function ProductDetail() {
    const {
        productDetail,
        closeProductDetail,
    }= React.useContext(ShoppingCartContext);


    return (
        <aside className={`${productDetail ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white `}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Details</h2>
                <div>
                    <XMarkIcon className='h-6 w-6 text-black'
                    onClick={()=>closeProductDetail()}>
                    </XMarkIcon>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail

