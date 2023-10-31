import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard ( {id, image, title, price, handleDelete, quantity, increaseQuantity, decreaseQuantity} ) {

  return (
    <div className="flex justify-between mb-3 bg-stone-50 rounded-lg p-3">

        <div>
            <figure className='justify-center h-20 w-20'>
                <img className='h-full w-full rounded-lg object-contain' 
                    src={image} alt='orderproduct'/>
            </figure>
            
            <div>
                <p className='text-sm font-light line-clamp-2'>{title}</p>
                <p className='flex justify-between text-md font-medium'>${price}
                

                    <span className='flex justify-around w-12 h-6 bg-stone-100 rounded-lg font-light'>
                        <button className=''
                        onClick={() => decreaseQuantity(id)}> 
                            - 
                        </button>

                        <span className='bg-white w-6 text-center py-1 text-xs'>{quantity}</span>

                        <button className=''
                        onClick={()=> increaseQuantity(id)} > 
                            + 
                        </button>
                    </span>
                
                </p> 
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