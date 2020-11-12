import React, { useEffect } from "react";
import styles from "../Checkout/checkout.module.css";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import DashboardNav from "../Dashboard/DashboardNav";
import Footer from "../LandingPage/Footer";
import { getAllOrders } from "../Auth/actions";

function Orders() {
  let { userOrders, user } = useSelector((state) => state.Auth);
  console.log(userOrders);
  let displayOrders = userOrders.reverse();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders(user._id));
  }, []);

  return (
    <>
      <DashboardNav />
      <div>
        <h3 className={classnames("ml-5 my-4", styles.textColor)}>
          Order History
        </h3>
        <hr />
        <div style={{ height: "100px" }}></div>
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              {userOrders &&
                displayOrders.map((item) => (
                  <div className="row" key={item._id}>
                    <div className="col">
                      <div className="card border-0 shadow mb-5 ">
                        <div
                          className="card-header text-white"
                          style={{ background: "#01579b" }}
                        >
                          <div className="row">
                            <div className="col">
                              <div className="row">
                                <div className="col h5">Ordered On</div>
                              </div>
                              <div className="row">
                                <div className="col">{item.createdAt}</div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="row">
                                <div className="col h5">Total</div>
                              </div>
                              <div className="row">
                                <div className="col">{item.total_amount}</div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="row">
                                <div className="col h5">Order ID</div>
                              </div>
                              <div className="row">
                                <div className="col">{item._id}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          {item.dish.map((elem) => (
                            <div
                              key={elem.dish_id}
                              className="card mb-3 col-10 offset-1"
                            >
                              <div className="row no-gutters">
                                <div className="col-4 offset-1">
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      {elem.dish_name}
                                    </h5>
                                    <p className="card-text">
                                      <div className="row">
                                        <div className="col">
                                          Category:
                                          <span>{elem.category}</span>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col">
                                          Price: <span>{elem.price}</span>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col">
                                          Quantity:
                                          <span>{elem.qty}</span>
                                        </div>
                                      </div>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="col-2"
                                  style={{ marginTop: "7%" }}
                                >
                                  Total Price:
                                  <span>{elem.subTotal}</span>
                                </div>
                                <div
                                  className="col-2 offset-1"
                                  style={{ marginTop: "7%" }}
                                >
                                  <button
                                    style={{
                                      background: "#01579b",
                                      color: "white",
                                      border: "1px solid #01579b",
                                    }}
                                  >
                                    Track Order
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Orders;
