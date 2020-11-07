import React from "react";
import styled from "./checkout.module.css";
import classnames from "classnames";

function Bag() {
  return (
    <>
      <div className="col-sm-12 col-lg-4 mb-4">
        <div className="row">
          <div className="col-12">
            <button className={classnames("btn btn-block", styled.theme)}>
              Proceed to Checkout
            </button>
            <p className="text-muted text-center mt-2">
              You won't be charged yet.
            </p>
            <div class="card">
              <div class="card-body">
                <div className="row">
                  <div className="col-12 d-flex justify-content-between">
                    <h5>Your Bag</h5>
                    <p style={{ color: "#01579b" }}>+ Add items</p>
                  </div>
                  <div className="col-12">
                    <p style={{ color: "#01579b" }}>Ali Baba Organic Market</p>
                  </div>
                  <div className="col-12">
                    <h5>Order</h5>
                    <div className="row">
                      <div className="col-2">4</div>
                      <div className="col-7">
                        <p>Chef's Salad</p>
                      </div>
                      <div className="col-3">$31.96</div>
                    </div>
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-7">
                        <p>Lorem, ipsum dolor.</p>
                      </div>
                      <div className="col-3">$31</div>
                    </div>
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
                            <h5>$ 0.00</h5>
                          </div>
                          <div className="col-12 d-flex justify-content-between">
                            <p>Subtotal</p>
                            <p>$ 0.00</p>
                          </div>
                          <div className="col-12 d-flex justify-content-between">
                            <h5>total</h5>
                            <h5>$ 0.00</h5>
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
