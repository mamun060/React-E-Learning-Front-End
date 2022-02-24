/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../Assets/css/CourseDetails/CourseContent.module.css';
import Thambnile from '../../Assets/images/Thambnile/CourseThambnile.png';
import {GoPlay} from "react-icons/go";
import { useEffect, useState } from 'react';

const CourseContent = () => {

    const [ courseSections , setCourseSections] = useState([]);
    const [ courseLessons , setcourseLessons] = useState([]);

    useEffect(()=>{

        setCourseSections([
            { id: 1, name: "Section -1" },
            { id: 2, name: "Section -2" },
            { id: 3, name: "Section -3" },
            { id: 4, name: "Section -4" },
            { id: 5, name: "Section -5" },
            { id: 6, name: "Section -6" },
            { id: 7, name: "Section -7" },
            { id: 8, name: "Section -8" },
            { id: 9, name: "Section -9" },
            { id: 10, name: "Section -10" }
        ])

        setcourseLessons([
            { id: 1, name: "1. Intro to Good Design process: Part 1" },
            { id: 2, name: "Victor Wayne" },
            { id: 3, name: "Jane Doe" },
            { id: 4, name: "Jane Doe" },
            { id: 5, name: "Jane Doe" },
            { id: 6, name: "Jane Doe" },
            { id: 7, name: "Jane Doe" },
            { id: 8, name: "Jane Doe" },
            { id: 9, name: "Jane Doe" },
            { id: 10, name: "Jane Doe" }
        ])

    },[])



    return (
        <>
            <div className={styles.CourseContentContainer}>

                <div className={styles.ContentButtonArea}>
                    <div className={styles.addTocardButton}>
                        <Link to={''}>Add To Card</Link>
                    </div>
                    <div className={styles.buyNowButton}>
                        <Link to={''}>Buy Now</Link>
                    </div>
                </div>

                <div className={styles.CourseContentLessionWrap}>
                    <div className={styles.CourseLessionHeading}>
                        <h4>course content</h4>
                    </div>
                    <div className={styles.CouseChapterListWrap}>
                        <Accordion>
                            {courseSections.map((section,i) => (

                                <Accordion.Item eventKey={i} key={i}>
                                    <Accordion.Header>{section.name ?? ''}</Accordion.Header>
                                    <Accordion.Body>
                                        <div className={styles.CouseListShowWrap}>
                                            <ul>
                                                {courseLessons.map((lesson, indx) => (
                                                    <li key={indx}>
                                                        <div className={styles.accordion}>
                                                            <div className={styles.accordionLeft}>
                                                                <img src={Thambnile} alt="Thambnile" />
                                                            </div>
                                                            <div className={styles.accordionRight}>
                                                                <div className={styles.lessonsTitle}>
                                                                    <h5>{++indx} Intro to Good Design process: Part 1</h5>
                                                                </div>
                                                                <div className={styles.spanAlign}>
                                                                    <span><GoPlay/></span>
                                                                    <span> 4min </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))} 
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                            ))}
                        </Accordion>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CourseContent;