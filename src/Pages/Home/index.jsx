import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import Modal from '../../Components/Modal';
import ProductDetail from '../../Components/ProductDetail'

function Home() {
  const {
    items,
    openModal,
  } = React.useContext(ShoppingCartContext);

  const { category } = useParams();
  const [itemsByCategory, setItemsByCategory] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const categoryLower = category?.toLowerCase();
    const filteredItems = categoryLower
      ? items.filter((item) => item.category && item.category.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-') === categoryLower)
      : items;
    setItemsByCategory(filteredItems);
  }, [category, items]);

  useEffect(() => {
    setFilteredItems(
      itemsByCategory.filter((item) => item.title && item.title.toLowerCase().includes(searchValue.toLowerCase()))
    );
  }, [searchValue, itemsByCategory]);

  return (
    <Layout>
      <h1 className='mt-3 font-medium text-2xl'>Exclusive Products</h1>

      <input
        type="text"
        placeholder='Looking for a product?'
        className='rounded-lg border-black w-1/3 p-4 mb-4 focus:outline-none'
        onChange={(event) => setSearchValue(event.target.value)}
      />

      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {filteredItems.length < 1 ? (
          <p className='text-2xl col-span-3 mb-6'>Nothing here!</p>
        ) : (
          filteredItems.map((item) => <Card key={item.id} data={item} />)
        )}
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