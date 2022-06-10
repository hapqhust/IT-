import { Button, Space } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import introTitle from "../../../assets/image/intro/intro-title.png"

import "./Article.css"

const Article = (props:any) =>{
    return(
        <div className="article__content">
            <div className="container">
                <div className="article__text">
                    <img src={introTitle} alt="" className='headline__secondary'/>
                    <p><span className='article__text-span'>    </span>「昇る太陽」の国の料理はますます人気が高まり、世界中の多くの人々に高く評価されています。 
                        では、何が日本料理をとても魅力的にしているのでしょうか？
                    <br/>
                    <span className='article__text-span'>    </span>料理の魅力は、それを作る人の考え方にあるのは事実です。 桜の国の料理人たちは、
                    天と地の調和の哲学を常に信じています。
                    <br/>
                    <span className='article__text-span'>    </span>自然の恵みに感謝し、和美プレミアムのシェフが最も典型的な料理を作り上げました。 
                    シェフがそれぞれの料理に自分の魂を込めると、食材の純度がより完全になります。 
                    その完璧なハーモニーはわびです！
                    </p>
                    <Link to="/gioi-thieu">
                        <Button type="primary" className="article__button">
                            <span>↳
                            </span>
                            もっと見る
                        </Button>
                    </Link>
                </div>
                <div className="article__image">
                    <img src="https://tokyodeli.com.vn/Data/Sites/3/News/277/97c57bbf0035f16ba8241-min.jpg" alt=""/>
                </div>
            </div>
        </div>
        );
}

export default Article;