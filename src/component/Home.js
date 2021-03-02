import React from "react";
import {Carousel} from 'react-bootstrap'


import '../App.css';

function Home() {
    return (
        <Carousel>
            <Carousel.Item>
                <img rel="preload" className="d-block w-100" src="https://dgmimages.s3.us-east-2.amazonaws.com/images/jump-start.jpg" alt="Jump Start" />
                <Carousel.Caption>
                    {/*<h3>First slide label</h3>*/}
                    <h1 className="lo">Jump Start</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://dgmimages.s3.us-east-2.amazonaws.com/images/lock-out.jpg" alt="Lock Out"/>
                <Carousel.Caption>
                    <h1 className="lo">Lock Out</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://dgmimages.s3.us-east-2.amazonaws.com/images/tire-service.jpg" alt="Tire Service"/>
                <Carousel.Caption>
                    <h1 className="lo">Tire Service</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://dgmimages.s3.us-east-2.amazonaws.com/images/fuel-delivery.jpg" alt="Fuel Delivery"/>
                <Carousel.Caption>
                    <h1 className="lo">Fuel Delivery</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;

