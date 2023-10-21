import React from 'react'
import {PlusIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function Card({data}) {
    const {
        count,
        setCount,
        openProductDetail,
    }= React.useContext(ShoppingCartContext);

    return (
        <div 
        className='bg-white cursor-pointer w-56 h-60 rounded-lg' 
        onClick={()=> openProductDetail()}>          
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data.category}
            </span>
                
            <img className='w-full h-full object-contain' 
                src={data.image} alt="product"/>
                
            <button className='absolute top-0 right-0 font-light bg-white border border-gray-700 rounded-full w-6 h-6 flex justify-center items-center m-2 hover:scale-110'
            onClick={()=> setCount(count+1)}>
                <PlusIcon className='w-4 h-4 text-black'></PlusIcon>
            </button>
        </figure>
            <p className='flex justify-between'>
                <span className='mr-2 text-sm font-light truncate'>
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