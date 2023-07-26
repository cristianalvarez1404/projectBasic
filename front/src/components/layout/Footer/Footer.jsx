import React from "react";
import Logo from "../../logo/Logo";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="sectionFooter">
          <div className="footerSection">
            <div className="footer footerLogo">
              <Logo />
              <div className="footerSocialMedia">
                <p>The best products in the world!</p>
                <div className="footerMedia">
                  <div className="social">
                    <Link to="/">
                      <AiFillInstagram size={25} />
                    </Link>
                  </div>
                  <div className="social">
                    <Link to="/">
                      <AiFillTwitterCircle size={25} />
                    </Link>
                  </div>
                  <div className="social">
                    <Link to="/">
                      <AiFillFacebook size={25} />
                    </Link>
                  </div>
                  <div className="social">
                    <Link to="/">
                      <AiFillYoutube size={25} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer footerCompany">
              <h1>Company</h1>
              <div className="linkTo">
                <Link>About us</Link>
              </div>
              <div className="linkTo">
                <Link>Our blog</Link>
              </div>
              <div className="linkTo">
                <Link>Reviews</Link>
              </div>
            </div>

            <div className="footer footerProducts">
              <h1>Products</h1>
              <div className="linkTo">
                <Link>Movile</Link>
              </div>
              <div className="linkTo">
                <Link>Computers</Link>
              </div>
              <div className="linkTo">
                <Link>Tablets</Link>
              </div>
            </div>

            <div className="footer footerSupport">
              <h1>Support</h1>
              <div className="linkTo">
                <Link>FAQ</Link>
              </div>
              <div className="linkTo">
                <Link>Contact Us</Link>
              </div>
              <div className="linkTo">
                <Link>Reviews</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
