import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../Auth/actions";
import { Link } from "react-router-dom";

const Div = styled.div`
  color: #01579b;
`;

function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.Auth);

  const loggingOut = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="dropdown">
      <div
        className="btn text-white dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {user.first_name}
      </div>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <div className="dropdown-item" href="#">
          <Div>
            <i className="fas fa-user-circle fa-3x mr-4"></i>
            <span className="font-weight-bold">{user.first_name}</span>
          </Div>
        </div>
        <div className="dropdown-item" href="#">
          <Div>
            <i className="fas fa-trophy ml-3 mr-2"></i>
            <span>Trophy</span>
          </Div>
        </div>
        <div className="dropdown-item" href="#">
          <Div>
            <i class="fas fa-tag mr-2 ml-3"></i>
            <span>Promos</span>
          </Div>
        </div>
        <div className="dropdown-item" href="#">
          <Div>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "#01579b" }}
            >
              <i class="fas fa-user mr-2 ml-3"></i>
              <span>Profile</span>
            </Link>
          </Div>
        </div>
        <div className="dropdown-item" href="#">
          <Div>
            <Link
              to="/orders"
              style={{ textDecoration: "none", color: "#01579b" }}
            >
              <i class="fas fa-clipboard-list mr-2 ml-3"></i>
              <span>Your Orders</span>
            </Link>
          </Div>
        </div>
        <div className="dropdown-item" href="#">
          <Div>
            <i class="fas fa-map-marker-alt mr-2 ml-3"></i>
            <span>Addresses</span>
          </Div>
        </div>
        <div className="dropdown-item" href="#">
          <Div>
            <i class="fas fa-credit-card mr-2 ml-3"></i>
            <span>Payment</span>
          </Div>
        </div>
        <div className="dropdown-item" href="#">
          <Div>
            <i class="fas fa-comment-dots mr-2 ml-3"></i>
            <span>Contact Us</span>
          </Div>
        </div>

        <div className="dropdown-item" href="#">
          <Div onClick={loggingOut}>
            <i class="fas fa-sign-out-alt mr-2 ml-3"></i>
            <span>Logout</span>
          </Div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
