import React from "react";

function DollerRating(props) {
  let dollars = [];
  for (let i = 1; i <= props.rating; i++) {
    dollars.push(i);
  }
  return (
    <>
      {dollars.map((dollar) => (
        <>
          <i
            style={{ color: "black" }}
            className="fa fa-usd"
            aria-hidden="true"
          ></i>
        </>
      ))}
    </>
  );
}
export default DollerRating;