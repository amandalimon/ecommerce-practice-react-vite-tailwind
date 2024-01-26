import React from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const { order } = React.useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center justify-center mt-3'>
        <h1>My Orders</h1>
      </div>
      <div className='w-80'> {
        order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalProducts={order.totalProducts}
              totalPrice={order.totalPrice}
            />
          </Link>
        ))
      }
      </div>
    </Layout>
  )
}

export default MyOrders
