import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

function BtmHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    setIsCategoryOpen(false);
  }, [location]);

  return (
    <div className="btm_header">
      <div className="container">
        <nav className="nav">
          <div className="category_nav">
            <div
              className="category_btn"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <IoMdMenu />
              <p>OUR Categories</p>
              <TiArrowSortedDown />
            </div>
            <div
              className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}
            >
              {categories.map((category) => {
                const name =
                  typeof category === "string" ? category : category.name;
                const slug =
                  typeof category === "string" ? category : category.slug;
                return (
                  <Link key={slug} to={`/category/${slug}`}>
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
        <div className="nav_links">
          {NavLinks.map((item) => (
            <li
              key={item.link}
              className={location.pathname === item.link ? "active" : ""}
            >
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </div>
        <div className="registration_icon">
          <Link to="/login">
            <PiSignInBold />
          </Link>
          <Link to="/">
            <FaUser />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BtmHeader;
