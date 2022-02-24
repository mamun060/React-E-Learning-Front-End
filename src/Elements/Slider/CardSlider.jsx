import React, { useState , useEffect} from 'react';
import Slider from "react-slick";
import styles from '../../Assets/css/Sliders/Slider.module.css';
import three from '../../Assets/images/Instructor/image 19.png';

import InstructorCard from '../Card/InstructorCard';

const CardSlider = ({SlideShape}) => {

  const [imageIndex, setImageIndex] = useState(0);
  const [sliders, setSliders] = useState([]);

  useEffect(()=>{
    setSliders([1, 2, 3, 4 , 5, 6]);
  },[])

  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
                  {sliders.map((slide, idx) => (
                    <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                        <InstructorCard 
                          images={three}
                          name="Md Alauddin"
                          title="Full-Stack Web Developer"
                          company="ThemeShaper"
                          fb="#"
                          linkedin="#"
                          youtube="#"
                          more_name="More Info"
                          more_link="#"
                        />
                    </div>
                  ))}
                </Slider>
            </div>
        </>
    );
};

export default CardSlider;