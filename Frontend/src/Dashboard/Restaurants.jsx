import React from "react";

function Restaurants() {
  return (
    <div>
      <div className="row">
        <div className="col">Icons</div>
        {Restaurants.map((item) => (
          <div className="row" key={item.id}>
            {/* image */}
            <div className="col">
              <img src={item.avatar} alt={item.name} />
            </div>
            {/* Name col */}
            <div className="col">
              <div className="row">
                <div className="col">{item.name}</div>
              </div>
              <div className="row">
                <div className="col">{item.categories}</div>
              </div>
              <div className="row">
                <div className="col">Dollars ---- cheap to expensive</div>
              </div>
            </div>
            {/* Stars & Ratings */}
            <div className="col">
              <div className="row">
                <div className="col">Ratings in terms of stars</div>
              </div>
              <div className="row">
                <div className="col">{item.reviews} Reviews</div>
              </div>
            </div>
            {/* Time */}
            <div className="col"></div>
            {/* Distance */}
            <div className="col"></div>
            {/* Delivery Fee */}
            <div className="col"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
