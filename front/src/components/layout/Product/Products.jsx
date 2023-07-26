import React from "react";
import "./Products.scss";

const Products = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="products">
          <h1>Best Products</h1>
          <div className="productGroup">
            <div className="product">
              <div className="productImage">
                <img
                  src="https://m.media-amazon.com/images/I/61SbkiR4D4L._AC_SX425_.jpg"
                  alt=""
                />
              </div>
              <div className="productInfo">
                <div className="productName">
                  <h2>iPhone 14 Pro Max</h2>
                </div>
                <div className="productPrice">
                  <h2>$10</h2>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="productImage">
                <img
                  src="https://m.media-amazon.com/images/I/617J1W1VM6L._AC_SY450_.jpg"
                  alt=""
                />
              </div>
              <div className="productInfo">
                <div className="productName">
                  <h2>Tablet PC Android 12 de 10.1 pulgadas</h2>
                </div>
                <div className="productPrice">
                  <h2>$59</h2>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="productImage">
                <img
                  src="https://m.media-amazon.com/images/I/61bX2AoGj2L._AC_SX342_.jpg"
                  alt=""
                />
              </div>
              <div className="productInfo">
                <div className="productName">
                  <h2>Apple MacBook Pro 2022 - Laptop con chip M2</h2>
                </div>
                <div className="productPrice">
                  <h2>$1195,08</h2>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="productImage">
                <img
                  src="https://m.media-amazon.com/images/I/91Fb+Pcxe-L._AC_SX450_.jpg"
                  alt=""
                />
              </div>
              <div className="productInfo">
                <div className="productName">
                  <h2>Dell OptiPlex PC de escritorio para computadora</h2>
                </div>
                <div className="productPrice">
                  <h2>$208.99</h2>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="productImage">
                <img
                  src="https://m.media-amazon.com/images/I/71PTElZL3HL._AC_SX569_.jpg"
                  alt=""
                />
              </div>
              <div className="productInfo">
                <div className="productName">
                  <h2>HUAWEI P60 Pro Dual SIM 8GB + 256GB</h2>
                </div>
                <div className="productPrice">
                  <h2>$105</h2>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="productImage">
                <img
                  src="https://m.media-amazon.com/images/I/616olwN1KDL._AC_SX679_.jpg"
                  alt=""
                />
              </div>
              <div className="productInfo">
                <div className="productName">
                  <h2>HP Portátil IPS HD de 14 pulgadas</h2>
                </div>
                <div className="productPrice">
                  <h2>$1059,01</h2>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="productImage">
                <img
                  src="https://m.media-amazon.com/images/I/61A1RYHuSHL._AC_SY355_.jpg"
                  alt=""
                />
              </div>
              <div className="productInfo">
                <div className="productName">
                  <h2>SAMSUNG Galaxy Z Fold 5 Cell Phone + $200 Amazon Gift</h2>
                </div>
                <div className="productPrice">
                  <h2>$999</h2>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="productImage">
                <img
                  src="https://m.media-amazon.com/images/I/71ctRE34RuL._AC_SX355_.jpg"
                  alt=""
                />
              </div>
              <div className="productInfo">
                <div className="productName">
                  <h2>Acer Nitro 5 AN515-58-525P Laptop para juegos</h2>
                </div>
                <div className="productPrice">
                  <h2>$1099,10</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
