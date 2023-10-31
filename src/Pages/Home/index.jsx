import React from 'react'
import {useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import Modal from '../../Components/Modal';
import { ShoppingCartContext } from '../../Context'


function Home() {
  const { openModal } = React.useContext(ShoppingCartContext);
  const [items, setItems] = useState (null)

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(data=> setItems(data))
  }, [])

    return (
      <Layout>
        Home 
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'> 
        {items?.map(item => (
        <Card 
          key={item.id} 
          data={item}
        />
        ))}
        </div>
        {openModal && (
        <Modal>
          <ProductDetail/>
        </Modal>
        )}
      </Layout>
    )
  }
  
  export default Home 