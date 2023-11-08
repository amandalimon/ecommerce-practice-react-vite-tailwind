import {ChevronRightIcon, CalendarIcon, ShoppingCartIcon} from '@heroicons/react/24/solid'

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props
  const currentDate = () => {
    const date = new Date().toLocaleDateString();
    return date
 }

  return (
    <div className='flex justify-between items-center mb-3 p-3 border border-black/50 rounded-lg bg-white shadow-lg'>
      
      <p className='flex flex-col items-center first:text-sm'>
        <span className='flex items-center gap-2'>
          <CalendarIcon className='h-4 w-4 text-black'/> 
          {currentDate()}
        </span>
        <span className='flex items-center gap-2'>
          <ShoppingCartIcon className='h-4 w-4 text-black'/>
          Products: {totalProducts}</span>
      </p>

      <p className='flex items-center gap-3 text-lg font-medium'>
        <span>$ {totalPrice}</span>
        <ChevronRightIcon className='h-4 w-4 text-black'/>
      </p>

    </div>
  )
}

export default OrdersCard
