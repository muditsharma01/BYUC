import { useState } from "react";
import "../Styles/CarDetails.css";
import Navbar from "./Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import brands from "../Assets/Brands";
import Footer from "./Footer";

function CarDetailsPage() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
  alert("Thanks for using BYUC Service. Our team members will contact you soon.");
  const form = document.getElementById("carForm");
  if (form) {
    form.reset();
  }
  };

  return (
    <>
      <Navbar />
      
      <div className="container sell-your-car-container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <form className="carForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <h2 className="text-center">Sell Your Car</h2>
              </div>
              <div className="mb-3">
                <label htmlFor="make" className="form-label">
                  Manufacturer
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="make"
                  placeholder="Enter Manufacturer Name"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="brand" className="form-label">
                  Brand
                </label>
                <select
                  className="form-control"
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option value="">Select Brand</option>
                  {brands.map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="model" className="form-label">
                  Model
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="model"
                  placeholder="Enter Model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="year" className="form-label">
                  Year
                </label>
                <DatePicker
                  id="year"
                  selected={year}
                  onChange={(date) => setYear(date)}
                  dateFormat="yyyy"
                  placeholderText="Enter Year"
                  showYearPicker
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mileage" className="form-label">
                  Mileage
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mileage"
                  placeholder="Enter Mileage"
                  value={mileage}
                  onChange={(e) => setMileage(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="condition" className="form-label">
                  Condition
                </label>
                <select
                  className="form-select"
                  id="condition"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                >
                  <option defaultValue>Choose Condition</option>
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mb-3">
                <button type="submit" className="btn btn-primary">
                  Sell My Car
                </button>
              </div>

              <div className="mb-3">
                <h3 className="text-center">Why sell with us?</h3>
              </div>
              <div className="row sell-your-car-features">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Easy Process</h5>
                      <p className="card-text">
                        Selling your car with us is easy and hassle-free. We
                        take care of everything for you!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Quick Payment</h5>
                      <p className="card-text">
                        Get paid quickly and securely for your car. We offer
                        multiple payment options to suit your needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Fair Price</h5>
                      <p className="card-text">
                        We offer a fair price for your car based on its
                        condition and market value. No need to haggle!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default CarDetailsPage;
