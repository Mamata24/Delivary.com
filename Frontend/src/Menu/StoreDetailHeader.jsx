import React from "react";
import StarRating from "../Dashboard/StarRating";
import classnames from "classnames";
import styled from "./storedetail.module.css";

function StoreDetailHeader(props) {
  console.log(props)
  const {restaurant_name,rating,reviews,restaurant_address,
    category,delivery_fee,min,estimated_time,id} = props.rest_detail[0]
  return (
    <>
      <div className="container-fluid">
        <div className={classnames("row", styled.bgImage)}>
          <div className={styled.overlay}>
            <div className="col-lg-12">
              <div className="row m-4">
                <div className="col-lg-2">
                  {id%2===0 ?
                  <img
                    style={{ borderRadius: 5,backgroundColor: "white",padding:5,width:170,height:140 }}
                    src="https://images.pexels.com/photos/5864290/pexels-photo-5864290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="rest_photo"
                  />:
                  <img
                    style={{ borderRadius: 5,backgroundColor: "white",padding:5,width:170,height:140 }}
                    src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="rest_photo"
                  />
                }
                </div>
                <div
                  className="col-lg-7 mr-auto"
                  style={{ color: "white", fontSize: 15 }}
                >
                  <h5>{restaurant_name}</h5>
                  <p>
                    <StarRating rating={rating} />
                    {'('+reviews+')'}<br></br>
                    {restaurant_address}{" "}|
                    {" "}{category}<br></br>
                    ₹{delivery_fee} delivery fee |  ₹{min} min <br />
                    Estimated time {estimated_time} min
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
