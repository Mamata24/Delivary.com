import React from "react";
import DashboardNav from "../Dashboard/DashboardNav";
import StoreDetailHeader from "./StoreDetailHeader";
import SubMenu from "./SubMenu";

function Menu() {
  return(
    <>
      <div className="container-fluid">
        <div className="row">
            <DashboardNav />
            <SubMenu />
            <StoreDetailHeader />
        </div>
      </div>
    </>
  )
}

export default Menu;
