import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Slider from "react-slick";
import styles from '../../Assets/css/Home/PopularCourse.module.css';
import SectionHeadingBtn from '../../Elements/Button/SectionHeadingBtn';
import SmallCourseCard from '../../Elements/Card/SmallCourseCard';

const PopularCourseSlider = () => {
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
            <Container fluid={true} className={styles.PopularCourseContainerWrap}>
                <div className={styles.PopularCourseContainer}>
                    <Container>
                        <Row>
                            <Col>
                               <div className={styles.PopularCourseHeading}>
                                   <SectionHeadingBtn 
                                   name="Popular Course"
                                   link="#"
                                   />
                               </div>
                            </Col>
                        </Row>

                        <Row>
                            <div className={styles.CategorySliderWrap}>
                                <Slider {...settings}>

                                    <div>
                                        <div className={styles.PopularCourseSlide}>
                                            <SmallCourseCard />
                                        </div>
                                    </div>

                                    <div>
                                        <div className={styles.PopularCourseSlide}>
                                            <SmallCourseCard />
                                        </div>
                                    </div>

                                    <div>
                                        <div className={styles.PopularCourseSlide}>
                                            <SmallCourseCard />
                                        </div>
                                    </div>

                                    <div>
                                        <div className={styles.PopularCourseSlide}>
                                            <SmallCourseCard />
                                        </div>
                                    </div>

                                    <div>
                                        <div className={styles.PopularCourseSlide}>
                                            <SmallCourseCard />
                                        </div>
                                    </div>

                                    <div>
                                        <div className={styles.PopularCourseSlide}>
                                            <SmallCourseCard />
                                        </div>
                                    </div>

                                    <div>
                                        <div className={styles.PopularCourseSlide}>
                                            <SmallCourseCard />
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    );
};

export default PopularCourseSlider;