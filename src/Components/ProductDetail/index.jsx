import React from 'react'
import {ShoppingCartContext} from '../../Context'
import {XMarkIcon} from '@heroicons/react/24/solid'

function ProductDetail() {
    const {
        setOpenModal,
        productToShow,
    }= React.useContext(ShoppingCartContext);

    const onCancel = () => { setOpenModal(false) };

    return (
        <aside className='w-3/6 h-4/6 flex flex-col rounded-lg bg-white overflow-auto'>

            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Details</h2>
    
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer'
                onClick={onCancel} />
            </div>
            
            <div className='grid grid-flow-col px-6 w-full h-full'>
                <figure className='px-6 mb-6'>
                    <img className= 'w-full h-full rounded-lg object-contain' 
                    src={productToShow.image} 
                    alt={productToShow.title}/>
                </figure>
                
                <p className='flex flex-col p-6 bg-stone-50 mb-6'>
                    <span className='font-medium text-md'>
                        {productToShow.title}</span>
                    <span className='font-light text-sm mt-4'>
                        {productToShow.description}</span>
                    <span className='flex justify-end font-medium text-xl mt-6 '>
                        ${productToShow.price}</span>
                </p>
            </div>

        
            

            
        </aside>
    )
}


<aside>
    <div>

    </div>



</aside>

export default ProductDetail



