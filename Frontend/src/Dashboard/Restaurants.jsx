import React, {useEffect, useState} from "react";
import {restaurant} from '../RestaurantData/Restaurant'

function Restaurants() {
  const [data,setData] = useState([])

  useEffect(()=>{
    setData(restaurant)
  })

  console.log(data)
  return(
    <>
    {data.map(singleData=>(
      <>
      <div key={singleData.restaurant_id} className="row view overlay">
            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-3">
                <img src={singleData.restaurant_image} alt="a1"/>
                </div>
                <div className="col-lg-9">
                <h3>{singleData.restaurant_name}</h3>
                <p>{singleData.category}</p>
                <p>$$$$</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-3">
                  <span>*****</span>
                  <p>{singleData.reviews} Reviews</p>
                </div>
                <div className="col-lg-2">
                  <span>{singleData.distance}</span>
                  <p>Miles</p>
                </div>
                <div className="col-lg-2">
                  <span>{singleData.estimated_time} min</span>
                  <p>Est. Time</p>
                </div>
                <div className="col-lg-2">
                  <span>${singleData.min}</span>
                  <p>Minimum</p>
                </div>
                <div className="col-lg-3">
                  <span>${singleData.delivery_fee}</span>
                  <p>Delivery Fee</p>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          </>
          ))}
    </>
  )
}

export default Restaurants;
