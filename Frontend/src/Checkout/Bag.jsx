import React from "react";
import styled from "./checkout.module.css";
import classnames from "classnames";
import { useSelector } from "react-redux";

function Bag() {
  const orders = useSelector((state) => state.Auth.orders);
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
                  <div className="col-12">
                    <p style={{ color: "#01579b" }}>Ali Baba Organic Market</p>
                  </div>
                  <div className="col-12">
                    <h5>Order</h5>
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
                              class="btn px-1 btn-secondary text-white"
                              type="button"
                              value="10 %"
                            />
                          </div>
                          <div className="col-2 ">
                            <input
                              class="btn px-1 btn-secondary text-white"
                              type="button"
                              value="15 %"
                            />
                          </div>
                          <div className="col-2 ">
                            <input
                              className="btn px-1 btn-secondary text-white"
                              type="button"
                              value="20 %"
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
                                <>
                                  ₹
                                  {orders
                                    .map((item) => item.subTotal)
                                    .reduce((a = 0, c) => a + Number(c))}
                                </>
                              ) : (
                                "No item in your bag"
                              )}
                            </h5>
                          </div>

                          <div className="col-12 d-flex justify-content-between">
                            <h5>Total</h5>
                            <h5>
                              ₹
                              {orders.length !== 0
                                ? orders
                                    .map((item) => item.subTotal)
                                    .reduce((a = 0, c) => a + Number(c))
                                : 0}
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
