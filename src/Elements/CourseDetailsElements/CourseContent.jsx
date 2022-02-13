/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Accordion } from 'react-bootstrap';
import styles from '../../Assets/css/CourseDetails/CourseContent.module.css';

const CourseContent = () => {
    return (
        <>
            <div className={styles.CourseContentContainer}>

                <div className={styles.ContentButtonArea}>
                    <div className={styles.LeftSignInButton}>
                        <a href="#">Add To Card</a>
                    </div>
                    <div className={styles.RightLogInButton}>
                        <a href='#'>Buy Now</a>
                    </div>
                </div>

                <div className={styles.CourseContentLessionWrap}>
                    <div className={styles.CourseLessionHeading}>
                        <h4>course content</h4>
                    </div>
                    <div className={styles.CouseChapterListWrap}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>React Redux chapter one</Accordion.Header>
                                <Accordion.Body>
                                    <div className={styles.CouseListShowWrap}>
                                        <ul>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>React Redux chapter two</Accordion.Header>
                                <Accordion.Body>
                                   <div className={styles.CouseListShowWrap}>
                                        <ul>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>React Redux chapter two</Accordion.Header>
                                <Accordion.Body>
                                   <div className={styles.CouseListShowWrap}>
                                        <ul>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>React Redux chapter two</Accordion.Header>
                                <Accordion.Body>
                                   <div className={styles.CouseListShowWrap}>
                                        <ul>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>React Redux chapter two</Accordion.Header>
                                <Accordion.Body>
                                   <div className={styles.CouseListShowWrap}>
                                        <ul>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>React Redux chapter two</Accordion.Header>
                                <Accordion.Body>
                                   <div className={styles.CouseListShowWrap}>
                                        <ul>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>React Redux chapter two</Accordion.Header>
                                <Accordion.Body>
                                   <div className={styles.CouseListShowWrap}>
                                        <ul>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>React Redux chapter two</Accordion.Header>
                                <Accordion.Body>
                                   <div className={styles.CouseListShowWrap}>
                                        <ul>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>React Redux chapter two</Accordion.Header>
                                <Accordion.Body>
                                   <div className={styles.CouseListShowWrap}>
                                        <ul>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header>React Redux chapter two</Accordion.Header>
                                <Accordion.Body>
                                   <div className={styles.CouseListShowWrap}>
                                        <ul>
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default CourseContent;