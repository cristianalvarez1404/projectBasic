import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../../logo/Logo";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <Logo />
        <div className="header headerLinks">
          <div className="link">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="link">
            <Link to={"/products"}>Products</Link>
          </div>
          <div className="link">
            <Link to={"/about"}>About us</Link>
          </div>
        </div>
        <div className="header headerIcons">
          <Link>
            <AiOutlineShoppingCart size={25} />
          </Link>
          <div className="headerImage">
            <Link>
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1690393526~exp=1690394126~hmac=1b65937a4fb72eb92eb90be654d13468d433feccdea33b7025d9f3c5fd7fb0be"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
