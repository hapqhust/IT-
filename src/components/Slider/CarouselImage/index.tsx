import React from "react";
import "./CarouselImage.css";
import { Carousel } from "antd";
import anh1 from '../../../assets/image/mon1.png'
import anh2 from '../../../assets/image/mon2.png'
import anh3 from '../../../assets/image/mon3.jpg'

const CarouselImage = (props: any) => {
    return(
        <Carousel autoplay>
            <div>
                <img
                    src={anh1}
                    alt="mon 1"
                />
            </div>
            <div>
                <img
                    src={anh2}
                    alt="mon 2"
                />
            </div>
            <div>
                <img
                    src={anh3}
                    alt="mon 3"
                />
            </div>
        </Carousel>
)};

export default CarouselImage;