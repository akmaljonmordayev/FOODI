import React from "react";
import "./customers.css";

function Customers() {
  return (
    <>
      <section className="section3">
        <div className="container">
          <div className="testimonials">
            <div className="img">
              <div className="back">
                <p className="numi">😋</p>
                <p className="pizza">🍕</p>
                <div className="coment-box">
                  {/* <img className="coment" src="./public/coment.png" alt="" />  */}
                  {/* <p>Our Best Chef 😁</p> */}
                </div>
              </div>
              <img src="./public/images/oshpaz.png" alt="" />
            </div>
            <div className="text">
              <a href="#">Testimonials</a>
              <h2>What Our Customers Say About Us</h2>
              <p>
                “I had the pleasure of dining at Foodi last night, and I'm still
                raving about the experience! The attention to detail in
                presentation and service was impeccable”
              </p>
              <div className="customer">
                <div className="icons">
                  <img
                    className="odam1"
                    src="./public/images/odam1.png"
                    alt=""
                  />
                  <img
                    className="odam2"
                    src="./public/images/odam2.png"
                    alt=""
                  />
                  <img
                    className="odam3"
                    src="./public/images/odam3.png"
                    alt=""
                  />
                </div>
                <div className="feedback">
                  <p>Customer Feedback</p>
                  <div className="baho">
                    <i className="fa-solid fa-star yulduz"></i>
                    <p className="reviews">
                      4.9
                      <span>(18.6k Reviews)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Customers;
