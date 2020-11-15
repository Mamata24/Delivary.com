import React from "react";
import DashboardNav from "../Dashboard/DashboardNav";
import Footer from "../LandingPage/Footer";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <>
      <DashboardNav />
      <div
        style={{
          backgroundImage: "linear-gradient(125deg,#000428,#004e92)",
          padding: "6%",
        }}
      >
        <div
          style={{
            borderRadius: "20px",
          }}
          className="col-6 offset-3 card text-center py-5"
        >
          <div className="card-img">
            <img
              style={{ background: "transparent" }}
              className="img-fluid"
              width="200px"
              src="https://i.imgur.com/4niebFr.jpg"
            />
          </div>
          <div className="card-title">
            <p>Success!</p>
          </div>
          <div className="card-text">
            <p>
              Yay! It's a nice order! <br />
              It will arrive soon.
            </p>
          </div>
          <Link to="/orders">
            <button className="btn col-4" style={{ color: "#004e92" }}>
              Track delivery
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderSuccess;
