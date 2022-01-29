import React from 'react';
import Slider from "react-slick";
import styles from '../../Assets/css/Sliders/Slider.module.css';


const CardSlider = ({SlideShape}) => {
    var settings = {
        className:"center",
        centerPadding:"60px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <>
            <div className={styles.CategorySliderWrap}>
                <Slider {...settings}>
                    <div>45646</div> 
                    <div>45646</div> 
                    <div>45646</div> 
                    <div>45646</div> 
                    <div>45646</div> 
                    <div>45646</div> 
                    <div>45646</div> 
                    <div>45646</div> 
                </Slider>
            </div>
        </>
    );
};

export default CardSlider;