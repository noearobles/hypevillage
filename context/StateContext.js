import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);



  const onAdd = (product, quantity, selectedSize) => {

    if (Array.isArray(selectedSize) && selectedSize.length === 0) {
      toast.error('Please select a size.');
      return;
    }
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    

      product.quantity = quantity;
      product.selectedSize = selectedSize;

      setCartItems([...cartItems, { ...product }]);
    

    toast.success(`${product.quantity} ${product.selectedSize} ${product.name} added to the cart.`);
  };

  const onRemove = (product) => {
    const productIndex = cartItems.findIndex((item) => item._id === product._id);
  
    if (productIndex !== -1) {
      const removedProduct = cartItems[productIndex];
      const newCartItems = [...cartItems];
      newCartItems.splice(productIndex, 1);
  
      setTotalPrice((prevTotalPrice) => prevTotalPrice - removedProduct.price * removedProduct.quantity);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - removedProduct.quantity);
      setCartItems(newCartItems);
    }
  };
  
  const toggleCartItemQuanitity = (id, value) => {
    const productIndex = cartItems.findIndex((item) => item._id === id);
  
    if (productIndex !== -1) {
      const foundProduct = cartItems[productIndex];
  
      if (value === 'inc') {
        foundProduct.quantity += 1;
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      } else if (value === 'dec' && foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
      const updatedCartItems = [...cartItems];
      updatedCartItems[productIndex] = foundProduct;
      setCartItems(updatedCartItems);
    }
  };
  

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities 
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);