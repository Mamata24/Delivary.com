import React from "react";
import styles from "../Checkout/checkout.module.css";
import classnames from "classnames";
import { useSelector } from "react-redux";
import DashboardNav from "../Dashboard/DashboardNav";
import Footer from "../LandingPage/Footer";

function Orders() {
  const userOrders = useSelector((state) => state.Auth.userOrders);
  return (
    <>
      <DashboardNav />
      <div>
        <h3 className={classnames("ml-5 my-4", styles.textColor)}>
          Order History
        </h3>
        <hr />
        <div>
          {userOrders &&
            userOrders.map((item) => (
              <div key={item.id} className="card">
                <div className="card-body">
                  <h5>{item.restaurant_name}</h5>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Orders;
