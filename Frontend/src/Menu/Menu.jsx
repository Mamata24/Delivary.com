import React from "react";
import DashboardNav from "../Dashboard/DashboardNav";
import MenuDisplay from "./MenuDisplay";
import StoreDetailHeader from "./StoreDetailHeader";
import SubMenu from "./SubMenu";
import OrderBag from "./OrderBag";
import {useSelector} from 'react-redux'
import Footer from '../LandingPage/Footer'
import Res from '../Dashboard/restaurants.json'

function Menu(props) {
  const orders = useSelector(state=>state.Auth.orders)
  // console.log(props.match.params.id)
  let rest_id = props.match.params.id
  let rest_detail = Res.filter(singleData=>singleData.id===Number(rest_id))
  let rest_name = rest_detail[0].restaurant_name
  // console.log(rest_name)

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{backgroundColor:"#eeeeee"}}>
          <DashboardNav />
          <SubMenu />
          <StoreDetailHeader />
            <div className="col-lg-8">
              <MenuDisplay />
            </div>
            <div className="col-lg-4">
              <OrderBag id={rest_id} rest_name = {rest_name}/>
            </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Menu;
