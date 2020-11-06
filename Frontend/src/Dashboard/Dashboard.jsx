import React, { useState } from "react";
import DashboardNav from "./DashboardNav";
import classnames from "classnames";
import styles from "./dashboard.module.css";
import { useSelector } from "react-redux";
// import Restaurants from "./Restaurants";
import restaurantsData from "./restaurants.json";

function Dashboard() {
  // Star Filter -- done
  const [star, setStar] = useState(0);

  const handleStar = (starRate) => {
    setStar(starRate);
  };

  // Category Filter
  const [category, setCategory] = useState([]);

  const filterCategory = (e, currCategory) => {
    // console.log(e.target);
    if (e.target.checked)
      setCategory(() => [...category, currCategory.toLowerCase()]);
    else {
      if (category.includes(currCategory.toLowerCase())) {
        let allDelivery = category.filter(
          (item) => item != currCategory.toLowerCase()
        );
        setCategory(allDelivery);
      }
    }
  };
  console.log(category);

  // Delivery Fee Filter -- done
  const [delivery, setDelivery] = useState([]);
  console.log(delivery);

  const handleDeliveryFilter = (e, fee) => {
    if (e.target.checked) {
      let allDelivery = [...delivery, fee];
      // console.log(allDelivery);
      setDelivery(allDelivery);
    } else {
      if (delivery.includes(fee)) {
        let allDelivery = delivery.filter((item) => item != fee);
        setDelivery(allDelivery);
      }
    }
  };

  // Delivery Time Filter -- done
  const [time, setTime] = useState("All");

  const deliveryTimeFilter = (e, time) => {
    setTime(time);
  };

  // Price Filter
  const [price, setPrice] = useState([0]);

  const priceFilter1 = (currPrice) => {
    setPrice((prev) => prev + 1);
  };

  // Sort Functionality

  const [sortCriterion, setSortCriterion] = useState("");

  const handleSort = (e) => {
    setSortCriterion(e.target.value);
  };

  console.log(sortCriterion);

  // let restaurants = useSelector((state) => state.Auth.restaurants);

  let restaurants = restaurantsData;
  console.log(category);
  restaurants = restaurants.filter((item) => {
    if (category.length === 0) return item;
    else {
      for (var i = 0; i < category.length; i++) {
        return item.category.toLowerCase().includes(category[i]);
        // return item.category.toLowerCase().includes("indian");
      }
    }
  });

  // restaurants = restaurants
  //   .filter((item) => {
  //     if (time === "All") return item;
  //     if (time !== "All") return Number(item.estimated_time) <= time;
  //   })
  //   .filter((item) => item.rating >= star)
  //   .filter((item) => {
  //     if (delivery.includes("all") || delivery.length === 0) return item;
  //     else {
  //       let maxDelivery = Math.max.apply(null, delivery);
  //       return item.min <= maxDelivery;
  //     }
  //   })
  //   .sort((a, b) => {
  //     if (sortCriterion === "all") return 0;
  //     if (sortCriterion === "rating")
  //       return Number(b.rating) - Number(a.rating);
  //     if (sortCriterion === "distance")
  //       return Number(a.distance) - Number(b.distance);
  //     if (sortCriterion === "minimum") return Number(a.min) - Number(b.min);
  //     if (sortCriterion === "estTime")
  //       return Number(a.estimated_time) - Number(b.estimated_time);
  //   });

  console.log(restaurants);

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
                  onChange={(e) => filterCategory(e, "Free")}
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
                  onChange={(e) => filterCategory(e, "Indian")}
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
                  onChange={(e) => filterCategory(e, "Vegetarian")}
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
                  onChange={(e) => filterCategory(e, "Chineese")}
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
                  onChange={(e) => filterCategory(e, "Italian")}
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
                  onChange={(e) => filterCategory(e, "Pizza")}
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
              <button onClick={(e) => priceFilter1(e, 1)}>$</button>
              {/* <button onClick={(e) => priceFilter2(e, 2)}>$$</button>
              <button onClick={(e) => priceFilter3(e, 3)}>$$$</button>
              <button onClick={(e) => priceFilter4(e, 4)}>$$$</button> */}
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
                  name="deliveryFilter"
                  value={delivery}
                  onChange={(e) => handleDeliveryFilter(e, 5)}
                  className="custom-control-input"
                  id="dollar5"
                />
                <label className="custom-control-label" htmlFor="dollar5">
                  {"<"} $5
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
                  name="deliveryFilter"
                  value={delivery}
                  onChange={(e) => handleDeliveryFilter(e, 10)}
                  className="custom-control-input"
                  id="dollar10"
                />
                <label className="custom-control-label" htmlFor="dollar10">
                  {"<"} $10
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
                  name="deliveryFilter"
                  value={delivery}
                  onChange={(e) => handleDeliveryFilter(e, 15)}
                  className="custom-control-input"
                  id="dollar15"
                />
                <label className="custom-control-label" htmlFor="dollar15">
                  {"<"} $15
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
                  name="deliveryFilter"
                  value={delivery}
                  onChange={(e) => handleDeliveryFilter(e, 20)}
                  className="custom-control-input"
                  id="dollar20"
                />
                <label className="custom-control-label" htmlFor="dollar20">
                  {"<"} $20
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
                  name="deliveryFilter"
                  value={delivery}
                  onChange={(e) => handleDeliveryFilter(e, "all")}
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
            <div
              className="col"
              value={time}
              onClick={(e) => deliveryTimeFilter(e, 10)}
            >
              10 min(no.)
            </div>
          </div>
          <div className="row">
            <div
              className="col"
              value={time}
              onClick={(e) => deliveryTimeFilter(e, 20)}
            >
              20 min(no.)
            </div>
          </div>
          <div className="row">
            <div
              className="col"
              value={time}
              onClick={(e) => deliveryTimeFilter(e, 30)}
            >
              30 min(no.)
            </div>
          </div>
          <div className="row mb-4">
            <div
              className="col"
              value={time}
              onClick={(e) => deliveryTimeFilter(e, "All")}
            >
              All
            </div>
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
              <div className="col">
                <select
                  name="sortFunction"
                  name="sortCriterion"
                  onChange={handleSort}
                >
                  <option value="all">Sort By</option>
                  <option value="distance">Distance</option>
                  <option value="rating">Rating</option>
                  <option value="minimum">Minimum</option>
                  <option value="estTime">Est. Time</option>
                </select>
              </div>
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
