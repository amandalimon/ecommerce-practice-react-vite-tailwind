import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  const lastOrderIndex = order ? order.length - 1 : 0;

  const { id } = useParams();
  const numericId = parseInt(id, 10);
  const index = !isNaN(numericId) && numericId >= 0 && numericId < order.length
    ? numericId
    : lastOrderIndex;

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mt-2'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-4 w-4 text-black cursor-pointer' />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          order?.[index]?.products.map(data => (
            <OrderCard
              key={data.id}
              id={data.id}
              title={data.title}
              image={data.image}
              price={data.price}
              quantity={data.quantity}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder
