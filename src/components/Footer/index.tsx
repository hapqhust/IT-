import { Button, Space } from 'antd';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import React from 'react';

import "./Footer.css"

const Footer = (props:any) =>{
    return(
        <div className="footer">
            <div className="footer-widgets">
                <aside id="stm_text-2" className="widget">
                    <div className="widgettitle widget-footer-title"><h4>HM日本レストラン</h4></div>		
                    <div className="textwidget"><hr className="mbdc"/>
                        <p>和美プレミアムの日本料理は、洗練された加工とアレンジだけでなく、
                        非常に繊細で多様な味わいです。それぞれの料理はメッセージであり、
                        文化の一部であり、お客様に敬意を表して贈る贈り物です...</p>
                    </div>
                </aside>

                <aside id="custom_html-2" className="widget">
                    <div className="widgettitle widget-footer-title"><h4>フォローする</h4></div>
                    <div className="textwidget"><hr className="mbdc"/>
                        <p>
                        情報ページでフォローしてください
                        </p>
                        <br/>
                        <div className="new-footer-socials">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener" className="social-media"> <FacebookOutlined className="icon facebook"/> </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener" className="social-media"><InstagramOutlined className="icon instagram"/></a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener" className="social-media"><YoutubeOutlined className="icon youtube"/></a>
                        </div>
                        </div>
                </aside>
            </div>
        </div>
    );
}

export default Footer;



	

