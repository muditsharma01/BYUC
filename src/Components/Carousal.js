import React from 'react'
import '../Styles/Craousal.css'

function Carousal() {
  return (
    <>
         <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://wallpapercave.com/wp/wp9442907.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>XYZ Motors</h5>
                            <p>"We've had a great experience working with BYUC. Their team is knowledgeable, professional, and always goes the extra mile to ensure customer satisfaction."</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpapercave.com/wp/wp9442992.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>ABC Auto Sales</h5>
                            <p>"BYUC has been an invaluable partner for our dealership. Their wide selection of high-quality used cars and exceptional customer service make them a go-to choice for car buyers in the area."</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpaperaccess.com/full/7317685.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>123 Car Exchange</h5>
                            <p>"We've had the pleasure of working with BYUC on several occasions, and each time they've delivered exceptional results. Their expertise in the car selling industry is evident in everything they do, and we look forward to continuing our partnership with them."</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    </>
  )
}

export default Carousal