import React from 'react';
import { useState} from "react";
import { useTransition, animated } from "react-spring";
import { easeQuadIn, easeQuadOut } from "d3-ease";
import CategoryCloseOutsideClick from './CategoryCloseOutsideClick';
import "../../Assets/css/Partials/CustomCategoryStyle.css";
import {MdKeyboardArrowDown} from 'react-icons/md';
import { Link } from 'react-router-dom';


const CustomCategorySection = () => {
    let [isOpen, setIsOpen] = useState(false);

    let transitions = useTransition(isOpen, null, {
      from: { opacity: 0, transform: "scale(0.95)" },
      enter: { opacity: 1, transform: "scale(1)" },
      leave: { opacity: 0, transform: "scale(0.95)" },
      config: (item, state) => ({
        easing: state === "leave" ? easeQuadIn : easeQuadOut,
        duration: state === "leave" ? 75 : 100,
      }),
    });

    let domNode = CategoryCloseOutsideClick(() => {
        setIsOpen(false);
    });

    return (
    <div>
      <div ref={domNode}>
          <Link to={'#'} onClick={() => setIsOpen((isOpen) => !isOpen)} className={'categoryToggle drop bs-dropbutton'}>
              <span className='text courseText'>Our courses</span>
              {/* <span className='text courseText'>সকল কোর্স সমূহ</span> */}
              <MdKeyboardArrowDown className='icon mx-2' />
          </Link>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                style={props}
                key={key}
                className="react-sping-ani-wrap"
              >
                <div className="DropDown-Btn-Wrap">
                  <div className="DropDown-sub-Wrap">

                    <h6 className='text courseCategoryMenuTitle pb-1'>Categories</h6>
                    {/* <h6 className='text courseCategoryMenuTitle pb-1'>ক্যাটাগরি সমূহ</h6> */}

                    <button className="single-button-style">
                     {/* ওয়েব ডিজাইন */}
                     Web design
                    </button>
                    <button className="single-button-style">
                      {/* ডিজিটাল মার্কেটিং */}
                      Digital Marketting 
                    </button>
                    <button className="single-button-style">
                      {/* ওয়েব ডেভেলপমেন্ট */}
                      Web development 
                    </button>
                    <button className="single-button-style">
                      {/* গ্রাফিক্স ডিজাইন */}
                      Graphic Design 
                    </button>
                    <button className="single-button-style">
                      {/* এসইও */}
                      SEO 
                    </button>
                    <button className="single-button-style">
                      {/* কন্টেন্ট রাইটিং */}
                      Content Writting 
                    </button>
                  </div>
              
                </div>
              </animated.div>
            )
        )}
      </div>
    </div>
    );
};

export default CustomCategorySection;