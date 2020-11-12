import React, { useState } from "react";
import styled from "./checkout.module.css";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { billAmount } from "../Auth/actions";

function Bag() {
  const dispatch = useDispatch();
  const { orders, billAmt, restaurantDetail } = useSelector(
    (state) => state.Auth
  );
  console.log(orders);
  const [tip, setTip] = useState(0);
  let orderSubTotal =
    orders.length !== 0
      ? orders
          .map((item) => Number(item.subTotal))
          .reduce((a = 0, c) => a + c)
          .toFixed(2)
      : 0;

  const handleTip = (e, tip) => {
    setTip(tip);
    let tipAmt = ((orderSubTotal * tip) / 100).toFixed(2);
    let totalAmt = (Number(orderSubTotal) + Number(tipAmt)).toFixed(2);
    dispatch(billAmount(totalAmt));
  };

  return (
    <>
      <div className="col-sm-12 col-lg-4 mb-4">
        <div className="row">
          <div className="col-12">
            <div class="card">
              <div class="card-body">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between">
                    <h5>Your Bag</h5>
                  </div>
                  <div className="col-12 font-weight-bold">
                    <p style={{ color: "#01579b", fontSize: "22px" }}>
                      {restaurantDetail.restaurant_Name} Order
                    </p>
                  </div>
                  <div className="col-12">
                    {orders &&
                      orders.map((item) => (
                        <div key={item.dish_id} className="row">
                          <div className="col-2">4</div>
                          <div className="col-7">
                            <p>{item.dish_name}</p>
                          </div>
                          <div className="col-3">₹ {item.subTotal}</div>
                        </div>
                      ))}

                    <hr />
                    <div className="row">
                      <div className="col-12">
                        <h5>Tip</h5>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-2 ">
                            <input
                              style={
                                tip === 10
                                  ? { background: "#01579b", color: "white" }
                                  : null
                              }
                              className="btn px-1"
                              type="button"
                              value="10%"
                              onClick={(e) => handleTip(e, 10)}
                            />
                          </div>
                          <div className="col-2 ">
                            <input
                              style={
                                tip === 15
                                  ? { background: "#01579b", color: "white" }
                                  : null
                              }
                              className="btn px-1"
                              type="button"
                              value="15%"
                              onClick={(e) => handleTip(e, 15)}
                            />
                          </div>
                          <div NameName="col-2 ">
                            <input
                              className="btn px-1"
                              style={
                                tip === 20
                                  ? { background: "#01579b", color: "white" }
                                  : null
                              }
                              type="button"
                              value="20%"
                              onClick={(e) => handleTip(e, 20)}
                            />
                          </div>
                          <div className="col-2 ">
                            <input
                              className={classnames(
                                "btn px-1 text-white",
                                styled.theme
                              )}
                              type="button"
                              value="Tip"
                            />
                          </div>

                          <div className="col-4">
                            <input
                              type="text"
                              className="form-control"
                              name=""
                              id=""
                            />
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-12 d-flex justify-content-between">
                            <h5>Subtotal</h5>
                            <h5>
                              {orders.length !== 0 ? (
                                <>₹{orderSubTotal}</>
                              ) : (
                                "No item in your bag"
                              )}
                            </h5>
                          </div>

                          <div className="col-12 d-flex justify-content-between">
                            <h5>Total</h5>
                            <h5>
                              ₹{orders.length !== 0 ? billAmt : orderSubTotal}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bag;
