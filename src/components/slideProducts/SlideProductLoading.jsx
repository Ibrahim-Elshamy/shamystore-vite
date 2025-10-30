import React from "react";

function SlideProductLoading() {
  return (
    <div className="loading_slideProduct">
      <div className="slide_products slide">
        <div className="container">
          <div className="top_slide">
            <h2 className="Skeleton"></h2>
            <p className="Skeleton"></p>
          </div>

          <div className="loading_products">
            <div className="product">
              <div className="product_img Skeleton"></div>
              <div className="content Skeleton"></div>
              <div className="content Skeleton"></div>
            </div>
            <div className="product">
              <div className="product_img Skeleton"></div>
              <div className="content Skeleton"></div>
              <div className="content Skeleton"></div>
            </div>
            <div className="product">
              <div className="product_img Skeleton"></div>
              <div className="content Skeleton"></div>
              <div className="content Skeleton"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideProductLoading;
