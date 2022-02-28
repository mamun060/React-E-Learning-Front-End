import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Assets/css/Partials/MobileCustomCategory.module.css';

const MobileCustomCategory = () => {
    return (
        <>
             <div className={styles.MobileCustomCategoryWrap}>
                    <h6 className='text courseCategoryMenuTitle pb-1'>Categories</h6>
                    <div className={styles.MobileCategoryInnerWrap}>
                        <Link to="" className="single-button-style">
                            Web design
                        </Link>
                        <Link to='' className="single-button-style">
                            Digital Marketting 
                        </Link>
                        <Link to="" className="single-button-style">
                            Web development 
                        </Link>
                        <Link to="" className="single-button-style">
                            Graphic Design 
                        </Link>
                        <Link to="" className="single-button-style">
                            SEO 
                        </Link>
                        <Link to="" className="single-button-style">
                            Content Writting 
                        </Link>
                      
                      
                    </div>
            </div>
        </>
    );
};

export default MobileCustomCategory;