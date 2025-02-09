import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./dishes.css";
import BigCard from '../../componenets/bigCard/bigCard'
import salad1 from "../../../../public/images/salad1.png";
import salad2 from "../../../../public/images/salad2.png";
import salad3 from "../../../../public/images/salad3.png";

function DishesSection() {
  return (
    <>
      <section  className="dishes-section">
        <p className="special-dishes">Special Dishes</p>
        <div className="left-right-parent">
          <div className="left">
            <h2>Standout Dishes From Our Menu</h2>
          </div>
          <div className="right">
            <div className="left-arrow">
              <MdOutlineKeyboardArrowLeft />
            </div>
            <div className="right-arrow">
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>

        <div className="cards">
          <BigCard
            img={salad1}
            title={"Fattoush salad"}
            desc={"Description of the item"}
            price={"24.00"}
            rate={"4.9"}
          />
          <BigCard
            img={salad2}
            title={"Vegetable salad"}
            desc={"Description of the item"}
            price={"26.00"}
            rate={"4.6"}
          />
          <BigCard
            img={salad3}
            title={"Egg vegi salad"}
            desc={"Description of the item"}
            price={"23.00"}
            rate={"4.5"}
          />
        </div>
      </section>
    </>
  );
}

export default DishesSection;
