import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/Home/TopInstuctor.module.css';
import TopInstructorHeadingBtn from '../../Elements/Button/TopInstructorHeadingBtn';
import Slider from "react-slick";
import InstructorCard from './../../Elements/Card/InstructorCard';
import one from '../../Assets/images/Instructor/image 19.png';
import two from '../../Assets/images/Instructor/image 20.png';
import three from '../../Assets/images/Instructor/image 21.png';

const TopInstructorSlider = () => {
    var settings = {
        className: "center",
        centerMode: true,
        dots: true,
        arrows: false,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 1000,
        cssEase: "linear",
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
              slidesToShow: 2,
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
          <Container fluid={true}>
              <div className={styles.TopInstructorSliderContainer}>
                  <Container>
                      <div className={styles.TopInstructorWrap}>
                        <Row>
                            <Col>
                                <div className={styles.TopInstructorHeading}>
                                    <TopInstructorHeadingBtn />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                        <Slider {...settings}>

                            <div>
                                <div className={styles.PopularCourseSlide}>
                                    <InstructorCard 
                                    images={one}
                                    name="Nazmul Huda"
                                    title="Full-Stack Web Developer"
                                    company="ThemeShaper"
                                    fb="#"
                                    linkedin="#"
                                    youtube="#"
                                    more_name="More Info"
                                    more_link="#"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className={styles.PopularCourseSlide}>
                                <InstructorCard 
                                    images={two}
                                    name="Nazmul Huda"
                                    title="Web Developer"
                                    company="ThemeShaper"
                                    fb="#"
                                    linkedin="#"
                                    youtube="#"
                                    more_name="More Info"
                                    more_link="#"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className={styles.PopularCourseSlide}>
                                <InstructorCard 
                                    images={three}
                                    name="Nazmul Huda"
                                    title="Web Developer"
                                    company="ThemeShaper"
                                    fb="#"
                                    linkedin="#"
                                    youtube="#"
                                    more_name="More Info"
                                    more_link="#"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className={styles.PopularCourseSlide}>
                                <InstructorCard 
                                    images={one}
                                    name="Nazmul Huda"
                                    title="Web Developer"
                                    company="ThemeShaper"
                                    fb="#"
                                    linkedin="#"
                                    youtube="#"
                                    more_name="More Info"
                                    more_link="#"
                                    />
                                </div>
                            </div>

                            </Slider>
                        </Row>
                      </div>
                  </Container>
              </div>
          </Container>    
        </>
    );
};

export default TopInstructorSlider;