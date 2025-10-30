import React, { useContext } from "react";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart, FaShare, FaCheck } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";



function Product({item}) {  
  const {
    cartItems,
    addToCart,
    favouriteItems,
    addToFavourite,
    removeFromFavorites,
  } = useContext(CartContext);
  const navigate = useNavigate()
  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id)
  const isInFavourite = favouriteItems.some((favItem) => favItem.id === item.id)


  const handleAddToCart = () =>{
    addToCart(item)

    toast.success(
      <div className="toast_wrapper">
        <img src={item.images[0]} alt="" className="toast-image" />

        <div className="toast_content">
          <strong>{item.title}</strong>
          added to Cart
          <button className="btn" onClick={() => navigate('/cart')}>
            View Cart
          </button>
        </div>
      </div>,
      { duration: 3500 }
    );
  }


  const handleAddToFavourite = () => {
    if(isInFavourite) {
      removeFromFavorites(item.id)
      toast.error(`${item.title} Removed To Favourite`);
    } else {
      addToFavourite(item);
      toast.success(`${item.title} added To Favourite`);
    }
  }
  return (
    <div className={`product ${isInCart ? "in_cart" : ""}`}>
      <Link to={`/products/${item.id}`}>
        <span className="cart_status">
          <FaCheck /> In Cart
        </span>

        <div className="product_img">
          <img src={item.images[0]} alt="" />
        </div>

        <p className="product_name">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>

        <p className="price">
          <span>$ {item.price}</span>
        </p>
      </Link>
      <div className="icons">
        <span className="btn_addToCart" onClick={handleAddToCart}>
          <TiShoppingCart />
        </span>
        <span className={`${isInFavourite ? "in_fav" : ""}`} onClick={handleAddToFavourite}>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default Product;
