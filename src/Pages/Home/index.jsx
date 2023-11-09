import React from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import Modal from '../../Components/Modal';
import { ShoppingCartContext } from '../../Context'


function Home() {
  const {
    openModal,
    items,
    searchByTitle,
    setSearchByTitle,
    filteredItems,
  } = React.useContext(ShoppingCartContext);

  const renderView = () => {
    if (searchByTitle?.length > 0) {
      if (filteredItems?.length > 0) {
        return (
          filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div>We don't have anything</div>
        )
      }
    } else {
      return (
        items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }

  return (
    <Layout>

      <h1 className='mt-3 font-medium text-2xl'>Exclusive Products</h1>

      <input
        type="text"
        placeholder='Looking for a product?'
        className='rounded-lg border-black w-1/3 p-4 mb-4 focus:outline-none'
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>

      {openModal && (
        <Modal>
          <ProductDetail />
        </Modal>
      )}
    </Layout >
  )
}

export default Home 