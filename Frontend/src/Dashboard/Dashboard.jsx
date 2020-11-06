import React, { useState } from "react";
import DashboardNav from "./DashboardNav";
import classnames from "classnames";
import styles from "./dashboard.module.css";
import { useSelector } from "react-redux";
// import Restaurants from "./Restaurants";

function Dashboard() {
  const [star, setStar] = useState(0);

  const [category, setCategory] = useState("");

  const toggleBtn = (price) => {
    console.log(price);
  };

  const handleStar = (starRate) => {
    // console.log(starRate);
    setStar(starRate);
  };

  const filterCategory = (category) => {
    setCategory((prev) => [...prev, category]);
    console.log(category);
  };

  let restaurants = useSelector((state) => state.Auth.restaurants);

  restaurants = restaurants.filter((item) => item.rating >= star);

  return (
    <div>
      <DashboardNav />
      <div className="row">
        {/* Side Bar */}
        <div className={classnames("col-2 pl-4", styles.bgCol)}>
          {/* feature filters */}
          <div className="row">
            <div className="col font-weight-bold">Feature</div>
          </div>
          {/* Free delivery */}
          <div className="row">
            <div className="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="category"
                  onChange={() => filterCategory("Free")}
                  value={category}
                  className="custom-control-input"
                  id="Free Delivery"
                />
                <label className="custom-control-label" htmlFor="Free Delivery">
                  Free Delivery(5)
                </label>
              </div>
            </div>
          </div>
          {/* Indian */}
          <div className="row">
            <div className="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="category"
                  onChange={() => filterCategory("Indian")}
                  value={category}
                  className="custom-control-input"
                  id="Indian"
                />
                <label className="custom-control-label" htmlFor="Indian">
                  Indian(3)
                </label>
              </div>
            </div>
          </div>
          {/* Vegetarian */}
          <div className="row">
            <div className="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="category"
                  onChange={() => filterCategory("Vegetarian")}
                  value={category}
                  className="custom-control-input"
                  id="Vegetarian"
                />
                <label className="custom-control-label" htmlFor="Vegetarian">
                  Vegetarian(2)
                </label>
              </div>
            </div>
          </div>
          {/* Chinese */}
          <div className="row">
            <div className="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="category"
                  onChange={() => filterCategory("Chinese")}
                  value={category}
                  className="custom-control-input"
                  id="Chinese"
                />
                <label className="custom-control-label" htmlFor="Chinese">
                  Chinese(12)
                </label>
              </div>
            </div>
          </div>
          {/* Italian */}
          <div className="row">
            <div className="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="category"
                  onChange={() => filterCategory("Italian")}
                  value={category}
                  className="custom-control-input"
                  id="Italian"
                />
                <label className="custom-control-label" htmlFor="Italian">
                  Italian(12)
                </label>
              </div>
            </div>
          </div>
          {/* Pizza */}
          <div className="row mb-4">
            <div className="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  name="category"
                  onChange={() => filterCategory("Pizza")}
                  value={category}
                  className="custom-control-input"
                  id="Pizza"
                />
                <label className="custom-control-label" htmlFor="Pizza">
                  Pizza(12)
                </label>
              </div>
            </div>
          </div>
          <hr />
          {/* Star Ratings */}
          <div className="row mt-4">
            <div className="col font-weight-bold">Reviews</div>
          </div>

          <div className={classnames("row mb-4")}>
            <div className="col">
              <form>
                <div className={styles.rating}>
                  <input
                    id="star5"
                    name="star"
                    type="radio"
                    value={star}
                    onClick={() => handleStar(5)}
                    className={classnames(styles.radioBtn, styles.hide)}
                  />
                  <label htmlFor="star5">☆</label>
                  <input
                    id="star4"
                    name="star"
                    type="radio"
                    value={star}
                    onClick={() => handleStar(4)}
                    className={classnames(styles.radioBtn, styles.hide)}
                  />
                  <label htmlFor="star4">☆</label>
                  <input
                    id="star3"
                    name="star"
                    type="radio"
                    value={star}
                    onClick={() => handleStar(3)}
                    className={classnames(styles.radioBtn, styles.hide)}
                  />
                  <label htmlFor="star3">☆</label>
                  <input
                    id="star2"
                    name="star"
                    type="radio"
                    value={star}
                    onClick={() => handleStar(2)}
                    className={classnames(styles.radioBtn, styles.hide)}
                  />
                  <label htmlFor="star2">☆</label>
                  <input
                    id="star1"
                    name="star"
                    type="radio"
                    value={star}
                    onClick={() => handleStar(1)}
                    className={classnames(styles.radioBtn, styles.hide)}
                  />
                  <label htmlFor="star1">☆</label>
                  <div className={styles.clear}></div>
                </div>
              </form>
            </div>
          </div>
          <hr />
          {/* Price */}
          <div className="row mt-4">
            <div className="col font-weight-bold">Price</div>
          </div>

          <div className="row mb-4">
            <div className="col">
              <button onClick={() => toggleBtn(1)}>$</button>
              <button onClick={() => toggleBtn(2)}>$$</button>
              <button onClick={() => toggleBtn(3)}>$$$</button>
              <button onClick={() => toggleBtn(4)}>$$$</button>
            </div>
          </div>
          <hr />
          {/* Delivery Fee Filter */}
          <div className="row mt-5">
            <div className="col font-weight-bold">Delivery Minimum</div>
          </div>

          {/* < 5 */}
          <div className="row">
            <div className="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="dollar5"
                />
                <label className="custom-control-label" htmlFor="dollar5">
                  $5
                </label>
              </div>
            </div>
          </div>

          {/* < 10 */}
          <div className="row">
            <div className="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="dollar10"
                />
                <label className="custom-control-label" htmlFor="dollar10">
                  $10
                </label>
              </div>
            </div>
          </div>

          {/* < 15 */}
          <div className="row">
            <div className="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="dollar15"
                />
                <label className="custom-control-label" htmlFor="dollar15">
                  $15
                </label>
              </div>
            </div>
          </div>

          {/* < 20 */}
          <div className="row">
            <div className="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="dollar20"
                />
                <label className="custom-control-label" htmlFor="dollar20">
                  $20
                </label>
              </div>
            </div>
          </div>

          {/* < all */}
          <div className="row mb-4">
            <div className="col">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="dollarAll"
                />
                <label className="custom-control-label" htmlFor="dollarAll">
                  All
                </label>
              </div>
            </div>
          </div>
          <hr />

          {/* Estimated Time Filter */}
          <div className="row mt-4 font-weight-bold">
            <div className="col">Delivery Estimate</div>
          </div>
          <div className="row">
            <div className="col">10 min(no.)</div>
          </div>
          <div className="row">
            <div className="col">20 min(no.)</div>
          </div>
          <div className="row">
            <div className="col">30 min(no.)</div>
          </div>
          <div className="row mb-4">
            <div className="col">All</div>
          </div>
        </div>
        {/* Restaurants display */}
        <div className="col-10">
          {/* Icons */}
          <div className="row">
            {/* Italian */}
            <div className="col">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Italian.jpg"
                alt="Italian"
              />
            </div>
            {/* Indian */}
            <div className="col">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Indian.jpg"
                alt="Indian"
              />
            </div>
            {/* Chinese */}
            <div className="col">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Chinese.jpg"
                alt="Chinese"
              />
            </div>
            {/* Pizza */}
            <div className="col">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Pizza.jpg"
                alt="Pizza"
              />
            </div>
            {/* Vegetarian */}
            <div className="col">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Vegetarian.jpg"
                alt="Vegetarian"
              />
            </div>
            {/* Address and Sort */}
            <div className="row">
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
          <div className="row">
            <div className="col">{/* <Restaurants/> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
