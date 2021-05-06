import React from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


const About = () => {
    return (
        <div className="about">
            <div className="card">
                <section id="pins">
                    <div className="pin"></div>
                    <div className="pin"></div>
                </section>

                <h1>About page</h1>
                <p>This has been a cool school project in Helsinki Business College. You can either look for recipes or add you own in "add recipe" page</p>
                <Carousel>
                    <CarouselItem>
                        <img className="d-block w-100" src="../assets/Carousel1.PNG" alt="First page"></img>
                        <Carousel.Caption className="text-black">
                            <h3>Landing page</h3>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="d-block w-100" src="../assets/Carousel2.PNG" alt="Second page"></img>
                        <Carousel.Caption className="text-black">
                            <h3>Recipe page</h3>
                        </Carousel.Caption>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="d-block w-100" src="../assets/Carousel3.PNG" alt="Third page"></img>
                        <Carousel.Caption className="text-black">
                            <h3>Recipe adding page</h3>
                        </Carousel.Caption>
                    </CarouselItem>
                </Carousel>
            </div>
        </div>
    )
};

export default About;