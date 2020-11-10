import React, { useState } from "react";
import DashboardNav from "./DashboardNav";
import classnames from "classnames";
import styles from "./dashboard.module.css";
import Rest from "./Rest";
import { useSelector } from "react-redux";

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
          (item) => item !== currCategory.toLowerCase()
        );
        setCategory(allDelivery);
      }
    }
  };
  console.log(category);

  // Delivery Fee Filter -- done
  const [delivery, setDelivery] = useState([]);

  const handleDeliveryFilter = (e, fee) => {
    if (e.target.checked) {
      let allDelivery = [...delivery, fee];
      // console.log(allDelivery);
      setDelivery(allDelivery);
    } else {
      if (delivery.includes(fee)) {
        let allDelivery = delivery.filter((item) => item !== fee);
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

  let restaurants = useSelector((state) => state.Auth.restaurants);

  console.log(category);
  // restaurants = restaurants.some((item) => {
  //   if (category.length === 0) return item;
  //   else {
  //     return item.category.toLowerCase().includes(category);
  //   }
  // });

  restaurants = restaurants
    .filter((item) => {
      if (time === "All") return item;
      if (time !== "All") return Number(item.estimated_time) <= time;
    })
    .filter((item) => item.rating >= star)
    .filter((item) => {
      if (delivery.includes("all") || delivery.length === 0) return item;
      else {
        let maxDelivery = Math.max.apply(null, delivery);
        return item.min <= maxDelivery;
      }
    })
    .sort((a, b) => {
      if (sortCriterion === "all") return 0;
      if (sortCriterion === "rating")
        return Number(b.rating) - Number(a.rating);
      if (sortCriterion === "distance")
        return Number(a.distance) - Number(b.distance);
      if (sortCriterion === "minimum") return Number(a.min) - Number(b.min);
      if (sortCriterion === "estTime")
        return Number(a.estimated_time) - Number(b.estimated_time);
    });

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
            <div className="col">
              <input
                type="radio"
                name="deliveryTime"
                className="mr-2"
                value={time}
                onClick={(e) => deliveryTimeFilter(e, 10)}
              />
              10 min(no.)
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="radio"
                name="deliveryTime"
                className="mr-2"
                value={time}
                onChange={(e) => deliveryTimeFilter(e, 20)}
              />
              20 min(no.)
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="radio"
                name="deliveryTime"
                className="mr-2"
                value={time}
                onChange={(e) => deliveryTimeFilter(e, 30)}
              />
              30 min(no.)
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <input
                type="radio"
                name="deliveryTime"
                className="mr-2"
                value={time}
                onChange={(e) => deliveryTimeFilter(e, "All")}
              />
              All
            </div>
          </div>
        </div>
        {/* Restaurants display */}
        <div
          className={classnames("col-10")}
          style={{ marginTop: 30, textAlign: "center" }}
        >
          {/* Icons */}
          <div className={classnames("row", styles.scrollContent)}>
            {/* Italian */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Italian.jpg"
                alt="Italian"
              />
              <p className={classnames("ml-2", styles.textColor)}>Italian</p>
            </div>
            {/* Turkish */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Turkish.jpg"
                alt="Turkish"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Turkish
              </p>
            </div>
            {/* Indian */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Indian.jpg"
                alt="Indian"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Indian
              </p>
            </div>
            {/* Sandwiches */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Sandwiches.jpg"
                alt="sandwiches"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Sandwiches
              </p>
            </div>
            {/* Chinese */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Chinese.jpg"
                alt="Chinese"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Chinese
              </p>
            </div>
            {/* Sushi */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Sushi.jpg"
                alt="Sushi"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Sushi
              </p>
            </div>
            {/* Pizza */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Pizza.jpg"
                alt="Pizza"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Pizza
              </p>
            </div>
            {/* Salads */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Salads.jpg"
                alt="Salads"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Salads
              </p>
            </div>
            {/* Vegetarian */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Vegetarian.jpg"
                alt="Vegetarian"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Vegetarian
              </p>
            </div>
            {/* Asian */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Asian_icon.jpg"
                alt="Asian"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Asian
              </p>
            </div>
            {/* American */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/American.jpg"
                alt="American"
              />
              <p className={classnames("text-center", styles.textColor)}>
                American
              </p>
            </div>
            {/* Mediterranean */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Mediterranean.jpg"
                alt="Mediterranean"
              />
              <p className={styles.textColor}>Mediterranean</p>
            </div>
            {/* Healthy */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Healthy.jpg"
                alt="Healthy"
              />
              <p className={classnames("ml-4", styles.textColor)}>Healthy</p>
            </div>
            {/* Thai */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Thai.jpg"
                alt="Thai"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Thai
              </p>
            </div>
            {/* Deli */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Deli.jpg"
                alt="Deli"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Deli
              </p>
            </div>
            {/* Japanese */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Japanese.jpg"
                alt="Japanese"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Japanese
              </p>
            </div>
            {/* Wings */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Wings.jpg"
                alt="Wings"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Wings
              </p>
            </div>
            {/* Desserts */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Dessert.jpg"
                alt="Desserts"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Desserts
              </p>
            </div>
            {/* Seafood */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Seafood.jpg"
                alt="Seafood"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Seafood
              </p>
            </div>
            {/* Latin */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Generic.jpg"
                alt="Latin"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Latin
              </p>
            </div>
            {/* IceCream */}
            <div className="col-1 text-center">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/IceCream.jpg"
                alt="IceCream"
              />
              <p className={classnames("text-center", styles.textColor)}>
                Ice Cream
              </p>
            </div>
          </div>
          {/* Address and Sort */}
          <div className="row">
            <div className="col-lg-6" style={{ float: "left" }}></div>
            <div className="col-lg-6" style={{ float: "right" }}>
              <select name="sortFunction" onChange={handleSort}>
                <option value="all">Sort By</option>
                <option value="distance">Distance</option>
                <option value="rating">Rating</option>
                <option value="minimum">Minimum</option>
                <option value="estTime">Est. Time</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <Rest restData={restaurants} />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
