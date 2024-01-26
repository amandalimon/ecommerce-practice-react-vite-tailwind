import { useEffect, useState, useContext } from 'react';
import { ShoppingCartContext } from '../../Context'
import { useParams } from 'react-router-dom';
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import Modal from '../../Components/Modal';
import ProductDetail from '../../Components/ProductDetail'
import './Home.css'

function Home() {
  const {
    items,
    openModal,
  } = useContext(ShoppingCartContext);

  const { category } = useParams();
  const [itemsByCategory, setItemsByCategory] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    let filteredItems;

    if (category) {
      const categoryLower = category.toLowerCase();
      filteredItems = items.filter((item) => (
        item.category &&
        item.category.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-') === categoryLower
      ));
    } else {
      filteredItems = items;
    }
    setItemsByCategory(filteredItems);
  }, [category, items]);

  useEffect(() => {
    const categoryFilter = (item) => item.category && item.category.toLowerCase().includes(searchValue.toLowerCase())

    if (category) {
      setFilteredItems(
        itemsByCategory.filter((item) => item.title && item.title.toLowerCase().includes(searchValue.toLowerCase()))
      )
    } else {
      const filteredItemsByTitleAndCategory = items.filter((item) =>
        categoryFilter(item) || (item.title && item.title.toLowerCase().includes(searchValue.toLowerCase()))
      );
      setFilteredItems(filteredItemsByTitleAndCategory);
    }
  }, [searchValue, itemsByCategory]);

  const texts = [
    "Special Offers · Limited Time Deals!",
    "New Arrivals · Discover the Latest Trends",
    "Spring Collection · Fresh Styles for the Season",
    "Exclusive Products · Members save 25% OFF!",
    "Join Now · Get Exclusive Benefits!",
    "Flash Sale · Up to 50% OFF Today Only",
  ];

  return (
    <Layout>
      <div className='bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300 w-full h-8 text-xl italic leading-5 relative overflow-hidden'>
        <div className='animate-move absolute top-0 left-0 w-full h-full flex'>
          {texts.map((text, index) => (
            <span
              key={index}
              className='text-content text-white font-extrabold inline-block w-full p-1'
            >{text}</span>
          ))}
        </div>
      </div>

      <input
        type="text"
        placeholder='Looking for a product?'
        className='rounded-lg border-black w-1/2 p-3 focus:outline-none text-center my-4'
        onChange={(event) => setSearchValue(event.target.value)}
      />

      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full max-w-screen-lg justify-items-center'>
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
    </Layout>
  )
}

export default Home;