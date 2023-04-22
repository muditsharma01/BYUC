import React, { useState } from "react";
import "../Styles/CarList.css";
import Car from "./Car";


const CarList = ({ cars }) => {
  const [filter, setFilter] = useState({
    color: "",
    minPrice: "",
    maxPrice: "",
  });
  const [showMore, setShowMore] = useState(false);
  const carsToShow = showMore ? cars : cars.slice(0, 10);

  const handleInputChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

  const handleShowMoreClick = () => {
    setShowMore(true);
  };

  const filteredCars = carsToShow.filter((car) => {
    return (
      (filter.color === "" || car.color === filter.color) &&
      (filter.minPrice === "" || car.price >= filter.minPrice) &&
      (filter.maxPrice === "" || car.price <= filter.maxPrice)
    );
  });

  return (
    <div className="container mt-5" >
      <div className="row justify-content-center">
        <div className="col-md-6 w-100">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Car List</h4>
            </div>
            <div className="card-body">
              <form className="filter-form">
                <div className="row">
                  <div className="col">
                    <label htmlFor="color" className="form-label">
                      Color
                    </label>
                    <select
                      className="form-select filter-input"
                      id="color"
                      name="color"
                      value={filter.color}
                      onChange={handleInputChange}
                    >
                      <option value="">All</option>
                      <option value="Red">Red</option>
                      <option value="Blue">Blue</option>
                      <option value="Green">Green</option>
                      <option value="Yellow">Yellow</option>
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="minPrice" className="form-label">
                      Min Price
                    </label>
                    <input
                      type="number"
                      className="form-control filter-input bg-light"
                      id="minPrice"
                      name="minPrice"
                      value={filter.minPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="maxPrice" className="form-label">
                      Max Price
                    </label>
                    <input
                      type="number"
                      className="form-control filter-input bg-white"
                      id="maxPrice"
                      name="maxPrice"
                      value={filter.maxPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </form>
              <div className="row mt-3">
                {filteredCars.map((car) => (
                  <div className="col-md-4 mb-3" key={car.id}>
                    <Car car={car} />
                  </div>
                ))}
              </div>
              {showMore || cars.length <= 10 ? null : (
                <button
                  className="btn btn-primary mt-3"
                  onClick={handleShowMoreClick}
                >
                  Show More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
