import React from "react";
import "./HeroImage.scss";

const HeroImage = () => {
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="hero">
            <div className="heroImageControl">
              <img
                src="https://st2.depositphotos.com/1084193/11315/v/950/depositphotos_113150382-stock-illustration-abstract-tech-background-futuristic-technology.jpg"
                alt=""
              />
            </div>
            <div className="heroImage">
              <div className="heroTitle">
                <h1>Best Products'tech for buisness and more...</h1>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium cupiditate veritatis repellendus laudantium maiores
                doloribus adipisci id, commodi vitae, explicabo sed dignissimos
                accusamus officiis quos ea non voluptatem sunt officia. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
                cupiditate veritatis repellendus laudantium maiores doloribus
                adipisci id, commodi vitae, explicabo sed dignissimos accusamus
                officiis quos ea non voluptatem sunt officia.
              </p>
              <button className="heroButton">Buy now!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
