import React from "react";
import Rating from "@mui/material/Rating";
import "./Row.css";
import { Link } from "react-router-dom";

function Row({
  id,
  title,
  instructorName,
  ratings,
  stars,
  comments,
  price,
  image,
  isBestSeller,
}) {
  return (
    <Link to={`/course/${id}`}>
      <div className="row">
        <img src={image} alt={title} className="row__image" />
        <div className="row__text">
          <h3 className="row__title">{title}</h3>
          <h4 className="row__instructor">{instructorName}</h4>
          <div className="row__details">
            <p className="row__ratings">{ratings}</p>
            <Rating
              name="half-rating-read"
              defaultValue={stars}
              precision={0.5}
              readOnly
              size="small"
              className="row__stars"
            />
            <p className="row__comments"> ({comments}) </p>
          </div>
          <h4 className="row__price">{price}</h4>
        </div>
        <h5 className={isBestSeller ? "row__type" : "row__typeHide"}>
          Bestseller
        </h5>
      </div>
    </Link>
  );
}

export default Row;
