import React, { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart, FaShare } from "react-icons/fa6";
import { CartContext } from "../../components/context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductInfo({ product }) {
  const {
    cartItems,
    addToCart,
    removeFromFavorites,
    addToFavourite,
    favouriteItems,
  } = useContext(CartContext);
  const navigate = useNavigate();
  const isInCart = cartItems.some((cartItem) => cartItem.id === product.id);
  const isInFavourite = favouriteItems.some(
    (favItem) => favItem.id === product.id
  );

  const handleAddToCart = () => {
    addToCart(product);

    toast.success(
      <div className="toast_wrapper">
        <img src={product.images[0]} alt="" className="toast-image" />

        <div className="toast_content">
          <strong>{product.title}</strong>
          added to Cart
          <button className="btn" onClick={() => navigate("/cart")}>
            View Cart
          </button>
        </div>
      </div>,
      { duration: 3500 }
    );
  };

  const handleAddToFavourite = () => {
    if (isInFavourite) {
      removeFromFavorites(product.id);
      toast.error(`${product.title} removed from Favourites`);

    } else {
      addToFavourite(product);
      toast.success(`${product.title} added To Favourite`);
    }
  };
  return (
    <div className="item_details">
      <div className="name">{product.title}</div>
      <div className="stars"></div>
      <p className="price">${product.price}</p>
      <h5>
        {/* Avaiability: <span>{product.availabilityStatus}</span> */}
        Availability:{" "}
        <span>{product.stock > 0 ? "In Stock" : "Out of Stock"}</span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="description">{product.description}</p>
      <h5 className="stock">
        <span> Hurry Up! Only {product.stock} products left in stock.</span>
      </h5>
      <button
        className={`btn ${isInCart ? "in_cart" : ""}`}
        onClick={handleAddToCart}
      >
        {isInCart ? "Item In Cart" : "Add to cart"} <TiShoppingCart />
      </button>
      <div className="icons">
        <span
          className={`${isInFavourite ? "in_fav" : ""}`}
          onClick={handleAddToFavourite}
        >
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;
