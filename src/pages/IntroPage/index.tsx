import React from 'react';
import Footer from '../../components/Footer';
import './IntroPage.css';
import introTitle from '../../assets/image/intro/intro-title.png';

const IntroPage = () => {
  return (
    <React.Fragment>
      {/* <h1 className="menu-page__title center">IntroPage</h1> */}
      <div className="container">
          <h2 className="intro-page__ttl-border">
            <span className="intro-page__ttl-en">HAMI SUSHI INFORMATION</span>
            <span className="intro-page__ttl-jp">HAMI寿司の情報</span>
          </h2>
          <div className="concept-page__block01">
            <div className="concept-page__inner">
              <div className="concept-page__block01--txt">
                <p>HAMI寿司は現在日本国内で200店舗以上を展開する、すしチェーンストアです。スーパーや百貨店での「持ち帰りすし店」を中心として、お手頃な価格でおすしを楽しめる「回転すし店」、江戸時代のおすしの食べ方の再現ともいえる「立ち食いすし店」など、多彩なスタイルの業態で展開しております。<br/>その業態のすべてに共通して言えるのは、より身近におすしを楽しめる店であるということ。ちよだ鮨のミッションである「すしの大衆化」を実現するため、より気軽に、より安心に、おすしを楽しんでもらうための店作りに何よりも積極的に取り組んでいます。<br/><br/>そんなちよだ鮨がここベトナムにも、身近に新鮮でおいしいおすしを楽しめるレストランとして誕生しました。日本で「すしの大衆化」を実現してきた私たちは、ベトナムを始めとする世界各国でも変わらない日本の味を多くの人に提供することで、本当の意味での「日本」を味わっていただくことを目標にしています。そのために、味だけではなく、お客様にご提供するサービスすべてを日本の最高水準のクオリティでお届けしています。
                </p>
              </div>
            </div>
            <div className="concept-page__block01--img">
              <img className="" src="https://cdn.tgdd.vn/2020/10/CookProduct/Sushi-la-gi-co-tot-khong-nhung-loai-sushi-tot-va-khong-tot-cho-suc-khoe-1-1200x676.jpg" alt=""/>
            </div>
		      </div>

          <div className="concept-page__block02">
			      <div className="concept-page__inner">
              <h3 className="concept-page__block02--hd ffC">Our Concept</h3>
              <span className="concept-page__block02--desc">HAMI寿司の<em>3</em>つの特長</span>
              <ul>
                <li><div className="txt"><a href="#anchor01"><span><em className="ffC">1</em>新鮮で、おいしい<br/>おすしを届ける</span></a></div></li>
                <li><div className="txt"><a href="#anchor02"><span><em className="ffC">2</em>安全・健康で<br/>あること</span></a></div></li>
                <li><div className="txt"><a href="#anchor03"><span><em className="ffC">3</em>味だけに留まらない<br/>「日本体験」を</span></a></div></li>
              </ul>
			      </div>
		      </div>
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default IntroPage;