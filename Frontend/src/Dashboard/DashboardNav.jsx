import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Profile from "../LandingPage/Profile";
import LogReg from "../LandingPage/LogReg";
import { Link } from "react-router-dom";

// const Div = styled.div`
//   background: #01579b;
// `;

const Input = styled.input`
  border: 0;
  outline: 0;
  color: #01579b;
  font-weight: bolder;
  width: 400px;
`;

function DashboardNav() {
  const { login, place, orders } = useSelector((state) => state.Auth);

  return (
    <div className="container-fluid" style={{backgroundColor: "#01579b"}}>
      <div className="row" style={{marginTop:-15,marginBottom:-15}}>
        <div className="col-lg-2" style={{marginTop:10}}>
          <img src="https://drive.google.com/uc?export=view&id=1pBHxhESUPqpeY-_FfViEVHC41-lPxk4A" width="150px" alt="company logo" />
        </div>
        <div className="col-lg-7 mt-4">
          <Input className="bg-white" type="text" value={place} />
        </div>
        <div className="col-lg-3">
          <div className="row">
            <div className="col-lg-6" >
              {login ? <Profile /> : <LogReg />}
            </div>
            <div className="col-lg-3 text-white mt-4">
              <i className="fas fa-tag fa-lg fa-rotate-90"></i>
            </div>
            <div className="col-lg-3 text-white mt-4">
              <i className="fas fa-shopping-basket fa-lg"></i>
              {orders.length > 0 ? <i>{orders.length}</i>:""}
            </div>
          </div>
        </div>
        {/* <div className="col-lg-2 text-white mt-3">
        </div> */}
      </div>
    </div>
  );
}

export default DashboardNav;
