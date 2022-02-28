import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SeeMoreBtn from '../../Elements/Button/SeeMoreBtn';
import SmallCourseCard from '../../Elements/Card/SmallCourseCard';
import ButtonFilters from '../../Elements/FilterCard/ButtonFilters';
import CourseFiltersList from '../../Elements/FilterCard/CourseFiltersList';
import TagSearchFilter from '../../Elements/FilterCard/TagSearchFilter';
import styles from '../../Assets/css/Search/SearchListing.module.css';
import SearchNotFound from './SearchNotFound';

const SearchListing = () => {
    
    return (
        <>
            <Container className={styles.CourseListContainer}>
                <Row>
                    <Col xl={3} md={3}>
                        <div className={styles.AllCourseLeftWrap}>
                           <ButtonFilters />
                           <CourseFiltersList />
                           <TagSearchFilter />
                        </div>
                    </Col>
                    <Col xl={9} md={9}>
                        <div className={styles.AllCourseRightWrap}>
                            {/* <div>
                                <SearchNotFound />
                            </div> */}
                            <Row>
                                <Col md={4} sm={6} xs={12} className={styles.colMargin}>
                                    <div className={styles.AllCourseComponentWrap}>
                                        <SmallCourseCard />
                                    </div>
                                </Col>
                                <Col md={4} sm={6} xs={12}  className={styles.colMargin}>
                                    <div className={styles.AllCourseComponentWrap}>
                                        <SmallCourseCard />
                                    </div>
                                </Col>
                                <Col md={4} sm={6} xs={12} className={styles.colMargin}>
                                    <div className={styles.AllCourseComponentWrap}>
                                        <SmallCourseCard />
                                    </div>
                                </Col>
                                <Col md={4} sm={6} xs={12} className={styles.colMargin}>
                                    <div className={styles.AllCourseComponentWrap}>
                                        <SmallCourseCard />
                                    </div>
                                </Col>
                                <Col md={4} sm={6} xs={12} className={styles.colMargin}>
                                    <div className={styles.AllCourseComponentWrap}>
                                        <SmallCourseCard />
                                    </div>
                                </Col>
                                <Col md={4} sm={6} xs={12}  className={styles.colMargin}>
                                    <div className={styles.AllCourseComponentWrap}>
                                        <SmallCourseCard />
                                    </div>
                                </Col>
                                <Col md={4} sm={6} xs={12}  className={styles.colMargin}>
                                    <div className={styles.AllCourseComponentWrap}>
                                        <SmallCourseCard />
                                    </div>
                                </Col>
                                <Col md={4} sm={6} xs={12} className={styles.colMargin}>
                                    <div className={styles.AllCourseComponentWrap}>
                                        <SmallCourseCard />
                                    </div>
                                </Col>
                                <Col md={4} sm={6} xs={12} className={styles.colMargin}>
                                    <div className={styles.AllCourseComponentWrap}>
                                        <SmallCourseCard />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                   <div className={styles.CourseListSeeMoreBtn}>
                                       <SeeMoreBtn 
                                          btn_link="#"
                                          btn_name="See More"
                                       />
                                   </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SearchListing;