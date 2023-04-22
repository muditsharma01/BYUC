import React from "react";
import "../Styles/Car.css";

const Car = ({ car }) => {
  return (
    <div className="card">
      <img src={car.image} className="card-img-top" alt={car.make} />
      <div className="card-body">
        <h5 className="card-title">{car.make}</h5>
        <p className="card-text">
          <strong>Model:</strong> {car.model}
        </p>
        <p className="card-text">
          <strong>Price:</strong>{" "}
          {car.price ? car.price.toLocaleString() : "N/A"}
        </p>
        <p className="card-text">
          <strong>Color:</strong> {car.color}
        </p>
      </div>
    </div>
  );
};

export default Car;
