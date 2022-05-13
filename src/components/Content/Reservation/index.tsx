import { Button } from 'antd';
import React from 'react';
import contactTitle from "../../../assets/image/contact/contact-title.png";
import "./Reservation.css";

const Reservation = (props:any) =>{
    return(
    <div className="contact-info">
        <div className="container">
            <img src={contactTitle} alt="" className='headline__secondary'/>
            <div className='contact-info__description'>
                <p>
                    HM日本レストラン
                </p>
                <p>
                    * 和美プレミアムに来て、日本料理の真髄を楽しんでください。あなたの小さな願いがすべて聞こえます。</p>
                <p>
                    * より良いサービスを提供するために、より多くの情報をお知らせください。
                </p>
            </div>
            <div>
                <Button className="contact__button">
                    <span>↳
                    </span>
                    予約する
                </Button>
            </div>
        </div>
    </div>
    );
}

export default Reservation;