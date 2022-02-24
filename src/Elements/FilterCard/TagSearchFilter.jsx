import React from 'react';
import { VscSearch } from 'react-icons/vsc';
import styles from '../../Assets/css/FilterCard/TagSearchFilter.module.css';

const TagSearchFilter = () => {
return (
        <>
            <div className={styles.LeftSearchFilterSection}>

                <div className={styles.FitlerHeadingWrap}>
                    <p>Tags</p>
                </div>

                <div className={styles.TagSearchFilter}>
                    <input type="text" placeholder='Enter Tags'/>
                    <VscSearch />
                </div>

            </div>
        </>
);
};

export default TagSearchFilter;