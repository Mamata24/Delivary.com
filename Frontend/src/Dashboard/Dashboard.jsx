import React, { useState } from "react";
import styles from "./dashboard.module.css";
import Restaurants from "./Restaurants";

function Dashboard() {
  const [typeOfDelivery, setTypeOfDelivery] = useState("delivery");
  const handleTypeOfDelivery = (type) => {
    setTypeOfDelivery(type);
  };

  console.log(typeOfDelivery);

  return (
    <div>
      <div className="row">
        <div className="col-2 bg-light">
          <div className="row">
            <div className="col">Refine by</div>
          </div>
          <div className="row">
            <div className="col">Order Information</div>
          </div>
          <div className="row">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn">
                <input
                  onChange={() => handleTypeOfDelivery("delivery")}
                  type="radio"
                  className={
                    typeOfDelivery === "pickup" ? styles.btnBg : styles.normalBg
                  }
                  name="typeOfDelivery"
                  value={typeOfDelivery}
                  checked={typeOfDelivery === "delivery" ? true : false}
                />
                Delivery
              </label>
              <label className="btn btn-outline">
                <input
                  type="radio"
                  className={
                    typeOfDelivery === "pickup" ? styles.btnBg : styles.normalBg
                  }
                  onChange={() => handleTypeOfDelivery("pickup")}
                  name="typeOfDelivery"
                  value={typeOfDelivery}
                  checked={typeOfDelivery === "pickup" ? true : false}
                />
                Pickup
              </label>
            </div>
          </div>
        </div>
        <div className="col-10">
          <Restaurants />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
