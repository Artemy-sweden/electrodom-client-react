import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Button from "../components/Button/Button";

function Product() {
  const { id } = useParams();
  const [productData, setProductData] = React.useState([]);
  const [isProductLoaded, setIsProductLoaded] = React.useState(false);
  React.useEffect(() => {
    async function getProductInfo() {
      const prodResp = await axios.get(`http://localhost:3001/products/${id}`);
      setProductData(prodResp.data);
      setIsProductLoaded(true);
    }
    getProductInfo();
    // fetch(`http://localhost:3001/products/${id}`)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setProductData(json);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(console.log("sucksessss"));
  }, []);

  return isProductLoaded ? (
    <>
      {console.log(productData)}
      <div className="product">
        <div className="product__photos">
          {productData.photos.map((photo) => (
            <img src={photo} alt="product-photo" />
          ))}
        </div>
        <div className="product__content">
          <h4>{productData.name}</h4>
          <div className="product__rating">{productData.rating}</div>
          <div className="product__price">{productData.price}</div>
          <div className="product__short">
            <p>{productData.description}</p>
          </div>
          <div className="product__buttons">
            <Button />
          </div>
        </div>
      </div>
      <div className="product__section">
        <h4>Opisanie</h4>
        <p>{productData.description}</p>
      </div>
      <div className="product__section">
        <h4>Haracteristici</h4>
        <ul>
          {productData.characteristics.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="product__section">
        <h4>Comments</h4>
        <div className="comments__container">
          {productData.comments.map((comment) => (
            <div className="comment">
              <div className="user">
                <div className="avatar">{comment.user.username[0]}</div>
                <div className="data">
                  <div className="name">{comment.user.username}</div>
                  <div className="rating">{comment.user.rating}</div>
                </div>
              </div>
              <div className="text">{comment.text}</div>
              <div className="images">
                {comment.photos.map((photo) => (
                  <img src={photo} alt="comment-photo" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}
export default Product;
