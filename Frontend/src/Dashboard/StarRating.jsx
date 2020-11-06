import React from "react";

function StarRating(props) {
  let decimalPart = props.rating % 1;
  let stars = [];
  for (let i = 1; i <= props.rating; i++) {
    stars.push(i);
  }
  return (
    <>
      {stars.map((star) => (
        <>
          <i
            style={{ color: "yellow" }}
            className="fa fa-star"
            aria-hidden="true"
          ></i>
        </>
      ))}
      {decimalPart && decimalPart ? (
        <i
          style={{ color: "yellow" }}
          className="fa fa-star-half-o"
          aria-hidden="true"
        ></i>
      ) : (
        ""
      )}
    </>
  );
}

export default StarRating;