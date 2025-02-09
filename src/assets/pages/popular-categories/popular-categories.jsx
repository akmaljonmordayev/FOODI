import React from "react";
import "./popular-categories.css";
import CardPopular from "../../componenets/card/card";
import cardImage1 from "../../../../public/images/card-image1.png";
import cardImage2 from "../../../../public/images/card-image2.png";
import cardImage3 from "../../../../public/images/card-image3.png";
import cardImage4 from "../../../../public/images/card-image4.png";
export function PopularCategories() {
  return (
    <>
      <section className="popular">
        <h4 className="popular__title">Customer Favorites</h4>
        <h2 className="popular-subtitle">Popular Catagories</h2>
        <div className="popular__cards">
          <CardPopular
            img={cardImage1}
            title={"Main Dish"}
            subtitle={"(86 dishes)"}
          />
          <CardPopular
            img={cardImage2}
            title={"Break Fast"}
            subtitle={"(12 break fast)"}
          />
          <CardPopular
            img={cardImage3}
            title={"Dessert"}
            subtitle={"(48 dessert)"}
          />
          <CardPopular
            img={cardImage4}
            title={"Browse All"}
            subtitle={"(255 Items)"}
          />
        </div>
      </section>
    </>
  );
}
