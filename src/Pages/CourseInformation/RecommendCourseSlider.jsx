import React from 'react';
import { Container, Row} from 'react-bootstrap';
import Slider from "react-slick";
import styles from '../../Assets/css/CourseDetails/RecomandedCourse.module.css';
import SmallCourseCard from '../../Elements/Card/SmallCourseCard';

const RecommendCourseSlider = () => {
    var settings = {
        className:"center",
        centerPadding:"60px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,
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
        <div>
            <Container fluid={true}> 
                    <Container>
                        <Row className={styles.mainWrapper}>
                            <div className={styles.CategorySliderWrap}>
                                <Slider {...settings}>
                                    <>
                                        <div className={styles.PopularCourseSlide}>
                                            <SmallCourseCard className='containerSlidePopolarCard'/>
                                        </div>
                                    </>
                                    <>
                                        <div className={styles.PopularCourseSlide}>
                                            <SmallCourseCard className='containerSlidePopolarCard'/>
                                        </div>
                                    </>
                                    <>
                                        <div className={styles.PopularCourseSlide}>
                                            <SmallCourseCard className='containerSlidePopolarCard' />
                                        </div>
                                    </>
                                    <>
                                        <div className={styles.PopularCourseSlide}>
                                            <SmallCourseCard className='containerSlidePopolarCard'/>
                                        </div>
                                    </>

                                </Slider>
                            </div>
                        </Row>
                    </Container>
            </Container>
        </div>
    );
};

export default RecommendCourseSlider;