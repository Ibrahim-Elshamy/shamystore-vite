import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  //Favourite
  const [favouriteItems, setFavouriteItems] = useState(() => {
    const savedFav = localStorage.getItem("favouriteItems");
    return savedFav ? JSON.parse(savedFav) : [];
  });

  const addToFavourite = (item) => {
    setFavouriteItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };
  const removeFromFavorites = (id) => {
    setFavouriteItems((prev) => prev.filter((i) => i.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("favouriteItems", JSON.stringify(favouriteItems));
  }, [favouriteItems]);

  const CountOfFavQuantity = favouriteItems.length;

  //Cart
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const CountOfQuantity = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        CountOfQuantity,
        addToFavourite,
        favouriteItems,
        removeFromFavorites,
        CountOfFavQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
