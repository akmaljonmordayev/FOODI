import "./App.css";
import { PopularCategories } from "./assets/pages/popular-categories/popular-categories";
import DishesSection from "./assets/pages/dishes";
import Customers from "./assets/pages/customers/customers";
function App() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="left">
              <img src="public/images/logo.png" alt="" />
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Offers</a>
                </li>
              </ul>
            </div>
            <div className="right">
              <img src="public/images/search.png" alt="" />
              <button>
                <img src="public/images/call.png" alt="" />
                Contact
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <section className="sec1">
            <div className="sect1">
              <h1>
                Dive into Delights Of Delectable{" "}
                <span className="span">Food</span>
              </h1>
              <p>
                Where Each Plate Weaves a Story of Culinary Mastery and
                Passionate Craftsmanship
              </p>
              <div className="but">
                <button>Order Now</button>
                <img src="public/images/vd.png" alt="" />
              </div>
            </div>
            <div className="sect2">
              <img src="public/images/girl.png" alt="" />
            </div>
          </section>
          <PopularCategories />
          <DishesSection />
          <Customers />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
