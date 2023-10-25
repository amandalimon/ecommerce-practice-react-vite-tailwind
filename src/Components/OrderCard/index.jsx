import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = (data) => {

  return (
    <div className="flex justify-between mb-3 bg-stone-50 rounded-lg p-3">

        <div>
            <figure className='justify-center h-20 w-20'>
                <img className='h-full w-full rounded-lg object-contain' 
                    src={data.image} alt='orderproduct'/>
            </figure>
            
            <div>
                <p className='text-sm font-light line-clamp-2'>{data.title}</p>
                <p className='text-md font-medium'>${data.price}</p> 
            </div>
        </div>

        <div>
            <XMarkIcon className='h-3 w-3 text-black cursor-pointer'></XMarkIcon>
        </div>

    </div>
  )
}

export default OrderCard
