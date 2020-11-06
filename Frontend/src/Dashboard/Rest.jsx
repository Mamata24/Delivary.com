import React from "react";
import DollerRating from "./DollerRating";
import StarRating from "./StarRating";
import styles from "./restaurant.module.css";
import classnames from "classnames";

function Rest(props) {
  console.log(props.restData);
  let data = props.restData;
  return (
    <div>
      {data.map((singleData) => (
        <>
          <div
            key={singleData.restaurant_id}
            onClick={() => {
              console.log("working");
            }}
            className={classnames("row", styles.hoverEffect)}
          >
            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-3">
                  <img src={singleData.restaurant_image} alt="a1" />
                </div>
                <div className="col-lg-9" style={{ textAlign: "left" }}>
                  <h5>{singleData.restaurant_name}</h5>
                  <p className={styles.hidingText}>{singleData.category}</p>

                  {/* Doller Rating */}

                  <DollerRating rating={singleData.dollar} />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-3">
                  {/* star rating */}

                  <StarRating rating={singleData.rating} />
                  <p>{singleData.reviews} Reviews</p>
                </div>
                <div className="col-lg-2">
                  <span>{singleData.distance}</span>
                  <p>Miles</p>
                </div>
                <div className="col-lg-2">
                  <span>{singleData.estimated_time} min</span>
                  <p>Est. Time</p>
                </div>
                <div className="col-lg-2">
                  <span>${singleData.min}</span>
                  <p>Minimum</p>
                </div>
                <div className="col-lg-3">
                  <span>${singleData.delivery_fee}</span>
                  <p>Delivery Fee</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}

export default Rest;
