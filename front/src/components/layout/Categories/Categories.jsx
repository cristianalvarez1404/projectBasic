import React from "react";
import { AiFillMobile, AiOutlineLaptop } from "react-icons/ai";
import { FaTabletScreenButton } from "react-icons/fa6";
import { FcSmartphoneTablet } from "react-icons/fc";
import { MdSmartphone } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="categories">
          <h1>Categories</h1>
          <div className="categoriesSection">
            <Link to="/" className="categorie laptop">
              <div>
                <AiOutlineLaptop size={80} />
              </div>
              <p>Computers</p>
            </Link>
            <Link to="/" className="categorie phone">
              <div>
                <MdSmartphone size={80} />
              </div>
              <p>SmarthPhones</p>
            </Link>
            <Link to="/" className="categorie tablet">
              <div>
                <FaTabletScreenButton size={80} />
              </div>
              <p>Tablets</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
