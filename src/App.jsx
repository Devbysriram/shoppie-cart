import React, { useEffect, useState }  from 'react'
import Header from './components/Header'
import 'font-awesome/css/font-awesome.min.css';
import Products from './components/Products';
import Cartmodal from './components/Cartmodal';

const App = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [ showModal, setShowModal] = useState(false);
  const [cartItems , setCartItems] = useState([]);

  const addToCart = (id, title, price, image) => {
    const item = cartItems.find((item) => item.id === id);
    
    if (item) {
      alert("Item already added to cart");
    }
    else{
      setCartItemsCount(cartItemsCount + 1);
      setCartItems([...cartItems, { id, title, price, image }]);
    }
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems])

  return (
    <div className='overflow-x-hidden'>
        <Header cartItemsCount={cartItemsCount} showModal={showModal} setShowModal={setShowModal} />
        <Products addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} />
        { showModal && <Cartmodal cartItemsCount={cartItemsCount} showModal={showModal} setShowModal={setShowModal} cartItems={cartItems}/>}
    </div>
  )
}

export default App
