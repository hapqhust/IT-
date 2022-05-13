import React from 'react';
import CarouselImage from '../../components/Slider/CarouselImage';
import Article from '../../components/Content/Article';
import Menu from '../../components/Content/Menu';
import Reservation from '../../components/Content/Reservation';
import Footer from '../../components/Footer';

import "./HomePage.css"

const HomePage = (props:any) =>{
    return(
        <div className="homepage">
            <div>
                <CarouselImage />
            </div>       
            <div>
                <Article/>
            </div>
            <div>
                <Menu/>
            </div>
            <div>
                <Reservation/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}
        
export default HomePage;