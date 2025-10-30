import React from 'react'

function ProductImages({ product, mainImg, setMainImg }) {
  return (
    <div className="item_imgs">
      <div className="big_img">
        <img id="big_img" src={mainImg} alt={product.title} />
      </div>
      <div className="small_img">
        {product.images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={product.title}
            onClick={() => setMainImg(img)}
            className={mainImg === img ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImages
