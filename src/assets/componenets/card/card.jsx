import React from "react";
import { Fragment } from "react";
import "./card.css";
function CardPopular(props) {
  return (
    <Fragment>
      <div className="card">
        <div className="card__block">
          <img className="card__image" src={props.img} alt="" />
        </div>
        <h4 className="card__title">{props.title}</h4>
        <p className="card__subtitle">{props.subtitle}</p>
      </div>
    </Fragment>
  );
}
export default CardPopular;
