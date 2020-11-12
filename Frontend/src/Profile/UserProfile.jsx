import React from "react";
import DashboardNav from "../Dashboard/DashboardNav";
import { useSelector } from "react-redux";
import Footer from "../LandingPage/Footer";

function UserProfile() {
  const user = useSelector((state) => state.Auth.user);
  return (
    <>
      <div>
        <DashboardNav />
        <h3 className="ml-5 mt-5">Your Profile</h3>
        <input
          type="text"
          className="col-11 mx-5"
          style={{ border: 0, borderBottom: "1px solid grey" }}
        />
        <h5 className="ml-5 mt-5">Name</h5>
        <input
          type="text"
          className="col-11 mx-5"
          style={{ border: 0, borderBottom: "1px solid lightGray" }}
        />
        <h5 className="ml-5 mt-5 font-weight-bold" style={{ color: "#01579b" }}>
          {user.first_name}
        </h5>
        <input
          type="text"
          className="col-11 mx-5"
          style={{ border: 0, borderBottom: "1px solid lightGray" }}
        />
        <h5 className="ml-5 mt-5">Email</h5>
        <input
          type="text"
          className="col-11 mx-5"
          style={{ border: 0, borderBottom: "1px solid lightGray" }}
        />
        <h5 className="ml-5 mt-5 font-weight-bold" style={{ color: "#01579b" }}>
          {user.email}
        </h5>
        <input
          type="text"
          className="col-11 mx-5"
          style={{ border: 0, borderBottom: "1px solid lightGray" }}
        />
        <h5 className="ml-5 mt-5"># Phone</h5>
        <input
          type="text"
          className="col-11 mx-5"
          style={{ border: 0, borderBottom: "1px solid lightGray" }}
        />
        <p className="ml-5 mt-2">
          For security reasons, we'll email you a verification code to ensure
          that you're the one making this change.
        </p>
        <input
          type="text"
          placeholder="New Phone number"
          className="mt-4 ml-5 p-2"
        />
        <span style={{ fontWeight: "bold", color: "#01579b" }}>
          Email: {user.email}
        </span>
        <hr />
        <h5 className="ml-5 mt-2">SMS Notifications</h5>
        <hr />
        <input type="checkbox" className="ml-5 mt-2" />{" "}
        <span>
          Send me order updates via text message. (Standard rates may apply)
        </span>
        <hr />
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;
