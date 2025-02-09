import React from "react";
import "./bigCard.css";
import { FaStar } from "react-icons/fa";
function BigCard(props) {
  return (
    <>
      <div className="big-card">
        <img src={props.img} alt="" />
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
        <div className="right-left-parent">
          <p className="price">
            <span>$</span> {props.price}
          </p>
          <div className="right">
            <p>
              <FaStar />
              {props.rate}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BigCard;
