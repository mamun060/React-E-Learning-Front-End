import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../Assets/css/Search/SearchBreadCrub.module.css';

const SearchBreadcrub = () => {
    return (
        <>
            <div className={styles.SearchBreadcrubWrap}>
                <div className={styles.SearchBgWrap}>
                    <Container>
                        <div className={styles.PageTitle}>
                            <h2><span>"SearKey"</span> Search Result</h2>
                        </div>
                        <div className={styles.PageBreadCrubs}>
                            <p><span>0</span> Search Result</p>
                        </div>
                    </Container> 
                </div>
            </div>  
        </>
    );
};

export default SearchBreadcrub;