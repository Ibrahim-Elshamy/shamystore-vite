import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext';
import PageTransition from '../../components/PageTransition';
import Product from '../../components/slideProducts/Product';

function Favourite() {
  const {
      favouriteItems,
    } = useContext(CartContext);
  return (
    <PageTransition>
      <div className="category_products favouritePage">
        <div className="container">
          <div className="top_slide">
            <h2>Your Favourites</h2>
          </div>
          {favouriteItems.length === 0 ? (
            <p>NO Favourite Item Yet</p>
          ) : (
            <div className="products">
              {favouriteItems.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}

export default Favourite
