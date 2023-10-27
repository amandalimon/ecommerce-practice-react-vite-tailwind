import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard ( {id, image, title, price, handleDelete} ) {

  return (
    <div className="flex justify-between mb-3 bg-stone-50 rounded-lg p-3">

        <div>
            <figure className='justify-center h-20 w-20'>
                <img className='h-full w-full rounded-lg object-contain' 
                    src={image} alt='orderproduct'/>
            </figure>
            
            <div>
                <p className='text-sm font-light line-clamp-2'>{title}</p>
                <p className='text-md font-medium'>${price}</p> 
            </div>
        </div>

        <div>
            <XMarkIcon className='h-3 w-3 text-black cursor-pointer'
            onClick={()=> handleDelete(id)}
            />
        </div>

    </div>
  )
}

export default OrderCard
