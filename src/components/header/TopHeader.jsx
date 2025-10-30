import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "../../variables.css";
import "./header.css";
import { CartContext } from "../context/CartContext";
import SearchBok from "./SearchBok";

function TopHeader() {
  const { CountOfQuantity, CountOfFavQuantity } = useContext(CartContext);
  return (
    <div className="top_header">
      <div className="container">
        <Link className="logo" to="/">
          <h1><span>Shamy</span>store</h1>
        </Link>
        <SearchBok />
        <div className="header_icons">
          <div className="icon">
            <Link to="/favourite">
              <FaRegHeart />
              <span className="count">{CountOfFavQuantity}</span>
            </Link>
          </div>
          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{CountOfQuantity}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
