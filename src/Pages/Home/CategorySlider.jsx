import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeadingBtn from '../../Elements/Button/SectionHeadingBtn';
import styles from '../../Assets/css/Home/CategorySlider.module.css';
import Slider from "react-slick";
import CategoryCard from '../../Elements/Card/CategoryCard';
import one from '../../Assets/images/Category-Slider/1Amar-Skill-Icon1 1.png';
import two from '../../Assets/images/Category-Slider/Amar-Skill-Icon2 1.png';
import three from '../../Assets/images/Category-Slider/Amar-Skill-Icon3 1.png';
import four from '../../Assets/images/Category-Slider/Amar-Skill-Icon4 1.png';
import BigCourseCard from './../../Elements/Card/BigCourseCard';
import SmallCourseCard from '../../Elements/Card/SmallCourseCard';
import LoadMoreButton from './../../Elements/Button/LoadMoreButton';


const CategorySlider = () => {
    var settings = {
        className:"center",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
    };

    return (
        <div>
            <Container fluid={true}>
                <div className={styles.CategorySliderContainer}>
                    <Container>
                        {/** Category Heading Section Start */}
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
                        {/** Category Heading Section End */}

                        {/** Category Slider Section Start */}
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
                        {/** Category Slider Section End */}

                        {/** Category Course Section Start */}
                        <div className={styles.CategoryCourseWrappingBG}>
                            <Row>
                                <Col md={6}>
                                    <BigCourseCard />
                                </Col>
                                <Col md={6}>
                                    <Row>
                                        <Col md={6}>
                                             <SmallCourseCard />
                                        </Col>

                                        <Col md={6}>
                                            <SmallCourseCard />
                                        </Col>
                                    
                                        <Col md={6}>
                                             <SmallCourseCard />
                                        </Col>

                                        <Col md={6}>
                                            <SmallCourseCard />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className={styles.LoadMoreButtonPosition}>
                                                <LoadMoreButton 
                                                 btn_name="Load More"
                                                 btn_link="#"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        {/** Category Course Section End */}

                    </Container>
                </div>
            </Container>
        </div>
    );
};

export default CategorySlider;