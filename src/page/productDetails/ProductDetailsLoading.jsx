import React from "react";

function ProductDetailsLoading() {
  return (
    <div className="loading_item">
      <div className="details_item">
        <div className="container">
          <div className="item_imgs Skeleton"></div>
          <div className="item_details">
            <h5 className="loading_textDetailsItem Skeleton"></h5>
            <h5 className="loading_textDetailsItem Skeleton"></h5>
            <h5 className="loading_textDetailsItem Skeleton"></h5>
            <h5 className="loading_textDetailsItem Skeleton"></h5>
            <h5 className="loading_textDetailsItem Skeleton"></h5>
            <h5 className="loading_textDetailsItem Skeleton"></h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsLoading;
