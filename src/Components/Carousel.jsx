import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { withTranslation } from "react-i18next";
import Banner0 from "../Assets/img/Home/Web-banner.svg";
import Banner1 from "../Assets/img/Home/banner-ancester-academy.svg";

const CarouselComponent = ({ t }) => (
  <Carousel autoPlay dynamicHeight infiniteLoop showThumbs={false}>
    <div>
      <img src={Banner1} alt='Gunz0'/>
      <Link to="/ancester-academy"><p className="legend">{t('academy.learningPlatform')}</p></Link>
      
    </div>
    <div>
      <img src={Banner0} alt='Gunz1'/>
      <Link to="/"><p className="legend">{t('carousel.tryGame')}</p></Link>      
    </div>
  </Carousel>
);

export default withTranslation()(CarouselComponent);

