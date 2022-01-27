import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeadingBtn from '../../Elements/Button/SectionHeadingBtn';
import styles from '../../Assets/css/Home/Home.module.css';
import Slider from "react-slick";
import CategoryCard from '../../Elements/Card/CategoryCard';
import one from '../../Assets/images/Category-Slider/1Amar-Skill-Icon1 1.png';
import two from '../../Assets/images/Category-Slider/Amar-Skill-Icon2 1.png';
import three from '../../Assets/images/Category-Slider/Amar-Skill-Icon3 1.png';
import four from '../../Assets/images/Category-Slider/Amar-Skill-Icon4 1.png';

const CategorySlider = () => {
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
                            <div className={styles.CategorySliderWrap}>
                                <Slider {...settings}>
                                    <div>
                                        <CategoryCard 
                                        icon={one}
                                        cat_link="#"
                                        title="Web Developement"
                                        />
                                    </div>
                                    <div>
                                        <CategoryCard 
                                        icon={two}
                                        cat_link="#"
                                        title="Web Developement"
                                        />
                                    </div>
                                    <div>
                                        <CategoryCard 
                                        icon={three}
                                        cat_link="#"
                                        title="Web Developement"
                                        />
                                    </div>
                                    <div>
                                        <CategoryCard 
                                        icon={four}
                                        cat_link="#"
                                        title="Web Developement"
                                        />
                                    </div>
                                    <div>
                                        <CategoryCard 
                                        icon={one}
                                        cat_link="#"
                                        title="Web Developement"
                                        />
                                    </div>
                                    <div>
                                        <CategoryCard 
                                        icon={two}
                                        cat_link="#"
                                        title="Web Developement"
                                        />
                                    </div>
                                    <div>
                                        <CategoryCard 
                                        icon={four}
                                        cat_link="#"
                                        title="Web Developement"
                                        />
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

export default CategorySlider;