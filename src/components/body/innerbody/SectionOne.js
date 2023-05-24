import React from "react";
import "./SectionOne.css";
import food from "../../../images/foodlist.png";
import food1 from "../../../images/img1.jpg";
import food2 from "../../../images/img2.jpg";
import food3 from "../../../images/img3.jpg";
import food4 from "../../../images/img4.jpg";
import food5 from "../../../images/img5.jpg";
import food6 from "../../../images/img6.jpg";
import food7 from "../../../images/img7.jpg";
import food8 from "../../../images/img8.jpg";

const SectionOne = () => {
  return (
    <div className="section-body">
      <div className="section1-header">
        <h2>
          Top restaurants and more in <span>Glovpro</span>
        </h2>
      </div>
      <div className="restaurants">
        <div className="restaurant">
          <div className="rest-image">
            <img src={food} alt="food" />
          </div>
          <div className="rest-desc">
            <span>McDonald's</span>
          </div>
        </div>
        <div className="restaurant">
          <div className="rest-image">
            <img src={food1} alt="food" />
          </div>
          <div className="rest-desc">
            <span>KFC</span>
          </div>
        </div>

        <div className="restaurant">
          <div className="rest-image">
            <img src={food2} alt="food" />
          </div>
          <div className="rest-desc">
            <span>BURGER KING</span>
          </div>
        </div>

        <div className="restaurant">
          <div className="rest-image">
            <img src={food3} alt="food" />
          </div>
          <div className="rest-desc">
            <span>PIZZA HUT</span>
          </div>
        </div>

        <div className="restaurant">
          <div className="rest-image">
            <img src={food4} alt="food" />
          </div>
          <div className="rest-desc">
            <span>SUBWAY</span>
          </div>
        </div>
        <div className="restaurant">
          <div className="rest-image">
            <img src={food5} alt="food" />
          </div>
          <div className="rest-desc">
            <span>PAPIEE'S MEATRO</span>
          </div>
        </div>
      </div>
      <div className="section-two">
        <h2>Anything Delivered</h2>
        <div className="section-two-container">
          <div className="svg">
            <img src={food6} alt="food" />
            <h4>Your city's top restaurant</h4>
            <p>
              With a great variety of restaurants you can order your favourite
              food or explore new restaurants nearby!
            </p>
          </div>
          <div className="svg">
            <img src={food7} alt="food" />
            <h4>Best taste and affordable</h4>
            <p>
              With a great variety of restaurants you can order your favourite
              food or explore new restaurants nearby!
            </p>
          </div>
          <div className="svg">
            <img src={food8} alt="food" />
            <h4>One click away...</h4>
            <p>
              Find anything you need! From supermarkets to shops, pharmacies to
              florists — if it's in your city you can count on us to get it.
            </p>
          </div>
        </div>
        <div className="section-two-btn">
            <button>Explore stores around you</button>
        </div>
        <div className="section-three">
            <h2>Countries where we deliver</h2>
            <div className="countries">
                <div className="country">
                    <span>Nigeria</span>
                </div>
                <div className="country">
                    <span>Italy</span>
                </div>
                <div className="country">
                    <span>Ukraine</span>
                </div>
                <div className="country">
                    <span>Romania</span>
                </div>
                <div className="country">
                    <span>Georgia</span>
                </div>
                <div className="country">
                    <span>Portugal</span>
                </div>
                <div className="country">
                    <span>Poland</span>
                </div>
                <div className="country">
                    <span>Morocco</span>
                </div>
                <div className="country">
                    <span>Croatia</span>
                </div>
                <div className="country">
                    <span>Kenya</span>
                </div>
                <div className="country">
                    <span>Serbia</span>
                </div>
                <div className="country">
                    <span>France</span>
                </div>
                <div className="country">
                    <span>Turkey</span>
                </div>
                <div className="country">
                    <span>England</span>
                </div>
                <div className="country">
                    <span>Scotland</span>
                </div>
                <div className="country">
                    <span>Canada</span>
                </div>
                <div className="country">
                    <span>Netherland</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
