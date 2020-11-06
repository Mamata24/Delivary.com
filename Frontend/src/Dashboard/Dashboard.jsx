import React, { useState } from "react";
import DashboardNav from "./DashboardNav";
import classnames from "classnames";
import styles from "./dashboard.module.css";
import { Restaurant } from "@material-ui/icons";
import Restaurants from "./Restaurants";

function Dashboard() {
  const toggleBtn = () => {};

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
                  className="custom-control-input"
                  id="Free Delivery"
                />
                <label className="custom-control-label" for="Free Delivery">
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
                  className="custom-control-input"
                  id="Indian"
                />
                <label className="custom-control-label" for="Indian">
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
                  className="custom-control-input"
                  id="Vegetarian"
                />
                <label className="custom-control-label" for="Vegetarian">
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
                  className="custom-control-input"
                  id="Chinese"
                />
                <label className="custom-control-label" for="Chinese">
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
                  className="custom-control-input"
                  id="Italian"
                />
                <label className="custom-control-label" for="Italian">
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
                  className="custom-control-input"
                  id="Pizza"
                />
                <label className="custom-control-label" for="Pizza">
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
            {/* <div className={classnames("col", styles.rating)}>
              <span name="rating" id="str5" value="5">
                ☆
              </span>
              <span name="rating" id="str4" value="4">
                ☆
              </span>
              <span name="rating" id="str3" value="3">
                ☆
              </span>
              <span name="rating" id="str2" value="2">
                ☆
              </span>
              <span name="rating" id="str1" value="1">
                ☆
              </span>
            </div> */}

            <div className={styles.rating}>
              <input
                id="star5"
                name="star"
                type="radio"
                value="5"
                className={classnames(styles.radioBtn, styles.hide)}
              />
              <label for="star5">☆</label>
              <input
                id="star4"
                name="star"
                type="radio"
                value="4"
                className={classnames(styles.radioBtn, styles.hide)}
              />
              <label for="star4">☆</label>
              <input
                id="star3"
                name="star"
                type="radio"
                value="3"
                className={classnames(styles.radioBtn, styles.hide)}
              />
              <label for="star3">☆</label>
              <input
                id="star2"
                name="star"
                type="radio"
                value="2"
                className={classnames(styles.radioBtn, styles.hide)}
              />
              <label for="star2">☆</label>
              <input
                id="star1"
                name="star"
                type="radio"
                value="1"
                className={classnames(styles.radioBtn, styles.hide)}
              />
              <label for="star1">☆</label>
              <div className={styles.clear}></div>
            </div>
          </div>
          <hr />
          {/* Price */}
          <div className="row mt-4">
            <div className="col font-weight-bold">Price</div>
          </div>

          <div className="row mb-4">
            <div className="col">
              <button onClick={toggleBtn}>$</button>
              <button onClick={toggleBtn}>$$</button>
              <button onClick={toggleBtn}>$$$</button>
              <button onClick={toggleBtn}>$$$</button>
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
                <label className="custom-control-label" for="dollar5">
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
                <label className="custom-control-label" for="dollar10">
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
                <label className="custom-control-label" for="dollar15">
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
                <label className="custom-control-label" for="dollar20">
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
                <label className="custom-control-label" for="dollarAll">
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
        <div className="col-10" style={{marginTop:30,textAlign:"center"}}>
          {/* Icons */}
          <div className="row">
            {/* Italian */}
            <div className="col">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Italian.jpg"
                alt="Italian"
              />
              <p>Italian</p>
            </div>
            {/* Indian */}
            <div className="col">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Indian.jpg"
                alt="Indian"
              />
              <p>Indian</p>
            </div>
            {/* Chinese */}
            <div className="col">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Chinese.jpg"
                alt="Chinese"
              />
              <p>Chinese</p>
            </div>
            {/* Pizza */}
            <div className="col">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Pizza.jpg"
                alt="Pizza"
              />
              <p>Pizza</p>
            </div>
            {/* Vegetarian */}
            <div className="col">
              <img
                width="84px"
                src="https://s3.amazonaws.com/cuisine-images/Cuisine+icons/Vegetarian.jpg"
                alt="Vegetarian"
              />
              <p>Vegetarian</p>
            </div>
          </div>
          <hr/>
          <Restaurants />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
