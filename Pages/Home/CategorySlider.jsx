import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeadingBtn from '../../Elements/Button/SectionHeadingBtn';
import styles from '../../Assets/css/Home/Home.module.css';
import Slider from "react-slick";


const CategorySlider = () => {
    var settings = {
        className:"center",
        centerPadding:"60px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,
        dots: true,
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
        <div>
            <Container fluid={true}>
                <div className={styles.CategorySliderContainer}>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className={styles.CategorySliderHeading}>
                                    <SectionHeadingBtn 
                                    name="CATEGORY"
                                    link="#"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Slider {...settings}>
                                <div>
                                    one
                                </div>
                                <div>
                                    two
                                </div>
                                <div>
                                    three
                                </div>
                                <div>
                                    four
                                </div>
                                <div>
                                    five
                                </div>
                                <div>
                                    six
                                </div>
                                <div>
                                    seven
                                </div>
                            </Slider>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    );
};

export default CategorySlider;