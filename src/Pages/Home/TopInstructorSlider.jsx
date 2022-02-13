import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/Home/TopInstuctor.module.css';
import TopInstructorHeadingBtn from '../../Elements/Button/TopInstructorHeadingBtn';
import CardSlider from '../../Elements/Slider/CardSlider';

const TopInstructorSlider = () => {
 
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
                             <Col md={1}></Col>
                             <Col md={10} sm={12} xm={12}>
                                <CardSlider />
                             </Col>
                             <Col md={1}></Col>
                          </Row>
                      </div>
                  </Container>
              </div>
          </Container>    
        </>
    );
};

export default TopInstructorSlider;