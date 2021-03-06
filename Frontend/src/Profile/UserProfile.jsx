import React, { useState } from "react";
import DashboardNav from "../Dashboard/DashboardNav";
import { useSelector } from "react-redux";
import Footer from "../LandingPage/Footer";
import { editUser } from "../Auth/actions";

function UserProfile() {
  const user = useSelector((state) => state.Auth.user);
  let initialState = {
    first_name: user.first_name,
    email: user.email,
  };
  const [profile, setProfile] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((state) => ({ ...state, [name]: value }));
  };

  // console.log(profile);

  return (
    <>
      <div>
        <DashboardNav />
        <h3 className="ml-5 mt-5" style={{ color: "#01579b" }}>
          {user.first_name.toUpperCase()}'s Profile
          <span data-toggle="modal" data-target="#profileModal">
            <i className="fas fa-edit float-right"></i>
          </span>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="profileModal">
                    Edit Profile
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    value={profile.first_name}
                    onChange={handleChange}
                    name="first_name"
                  />
                  <br />
                  <input
                    type="text"
                    value={profile.email}
                    onChange={handleChange}
                    name="email"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </h3>
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
