import React from 'react';
import styles from '../../Assets/css/Search/SearchNotFound.module.css';
import banner from '../../Assets/images/search/vector-amar-skill.png';
import { Link } from 'react-router-dom';

const SearchNotFound = () => {
    return (
        <>
            <div className={styles.SearchNotFoundwrap}>
                <div className={styles.NotFoundBanner}>
                    <img src={banner} alt="Amar Skill" />
                </div>
                <di className={styles.NotFoundTitle}>
                    <h4>We Can't Found Any Courses</h4>
                </di>
                <div className={styles.NotFoundButton}>
                    <button>
                        <Link to="/">Back</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchNotFound;