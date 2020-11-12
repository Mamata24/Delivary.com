import React from "react";
import StarRating from "../Dashboard/StarRating";
import classnames from "classnames";
import styled from "./storedetail.module.css";

function StoreDetailHeader() {
  return (
    <>
      <div className="container-fluid">
        <div className={classnames("row", styled.bgImage)}>
          <div className={styled.overlay}>
            <div className="col-lg-12">
              <div className="row m-4">
                <div className="col-lg-2">
                  <img
                    style={{ borderRadius: 5,backgroundColor: "white",padding:5,width:140,height:140 }}
                    src="https://images.pexels.com/photos/2755/restaurant.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="tiger"
                  />
                </div>
                <div
                  className="col-lg-7 mr-auto"
                  style={{ color: "white", fontSize: 15 }}
                >
                  <h5>Bombay Sandwitch Co</h5>
                  <p>
                    <StarRating rating={4.5} />
                    (25)<br></br>
                    48 W 27TH ST, NEW YORK, NY, 10001|Gluten-Free, Indian,
                    Vegetarian<br></br>
                    $2.00 delivery fee | $12.00 min <br />
                    Estimated time 30 min
                  </p>
                </div>
                <div className="col-lg-3 mt-5">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary bg-white"
                    data-toggle="collapse"
                    href="#mapp"
                    aria-expanded="false"
                    aria-controls="mapp"
                  >
                    View map and hours
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoreDetailHeader;
