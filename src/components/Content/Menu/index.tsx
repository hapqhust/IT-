import { Button } from 'antd';
import React from 'react';
import menuTitle from "../../../assets/image/menu/menu-title.png";
import dish1 from "../../../assets/image/menu/dish1.jpg";
import dish2 from "../../../assets/image/menu/dish2.jpg";
import dish3 from "../../../assets/image/menu/dish3.jpg";
import dish4 from "../../../assets/image/menu/dish4.jpg";


import "./Menu.css"

const Menu = (props:any) =>{
    return(
        <div className="menu__content">
            <div className="container">
                <div className="menu__image">
                    <img src={dish1} alt="dish"></img>
                    <img src={dish2} alt="dish"></img>
                    <img src={dish3} alt="dish"></img>
                    <img src={dish4} alt="dish"></img>
                </div>
                <div className="menu__text">
                    <img src={menuTitle} alt="" className='headline__secondary'/>
                    <p><span className='menu__text-span'>    </span>和美プレミアムの日本料理は、洗練された加工とアレンジだけでなく、
                        非常に繊細で多様な味わいです。それぞれの料理はメッセージであり、
                        文化の一部であり、お客様に敬意を表して贈る贈り物です。
                    </p>
                    <Button type="primary" className="menu__button">
                        <span>↳
                        </span>
                        もっと見る
                    </Button>
                </div>
            </div>
        </div>
        );
}

export default Menu;