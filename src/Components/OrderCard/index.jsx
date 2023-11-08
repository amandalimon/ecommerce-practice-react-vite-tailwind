import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard({ id, image, title, price, handleDelete, handleCheckout, quantity, increaseQuantity, decreaseQuantity }) {

    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='h-3 w-3 text-black cursor-pointer'></XMarkIcon>
    }

    let renderQuantityButton
    if (handleCheckout) {
        renderQuantityButton = <span className='flex items-end justify-between w-12 h-6 bg-stone-100 rounded-lg font-light'>
            <button onClick={() => decreaseQuantity(id)}> - </button>
            <span className='bg-white w-6 text-center py-1 text-xs'>{quantity}</span>
            <button onClick={() => increaseQuantity(id)} > + </button>
        </span>
    } else {
        renderQuantityButton = 
        <span className='flex justify-center w-10 h-4 text-xs font-light bg-white rounded-lg'>x {quantity}</span>
    }

    return (
        <div className="bg-stone-50 rounded-lg p-3 mb-3">

            <figure className='flex justify-between h-20 w-full'>
                <img className='rounded-lg object-contain'
                    src={image} alt='orderproduct' />
                {renderXMarkIcon}
            </figure>

            <p className='text-sm font-light line-clamp-2'>{title}</p>

            <div className='flex justify-between mt-1'>
                <p className='flex justify-between text-md font-medium'>${price}</p>
                {renderQuantityButton}
            </div>
        </div>
    )
}

export default OrderCard