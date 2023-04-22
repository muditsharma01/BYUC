import React from "react";
import Navbar from "./Navbar";
import Carousal from "./Carousal";
import Footer from "./Footer";
import CarList from "./CarList";
import carsData from '../Data/Cardata'
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";



const HomePage = () => {
    return (
        <>
           <Navbar/>
           <Carousal/>
            <CarList cars={carsData}/>
            <Footer/>
        </>
    );
};

export default HomePage;