import React from 'react';
import { useState} from "react";
import { useTransition, animated } from "react-spring";
import { easeQuadIn, easeQuadOut } from "d3-ease";
import CategoryCloseOutsideClick from './CategoryCloseOutsideClick';
import "../../Assets/css/Partials/CustomCategoryStyle.css";
import {MdKeyboardArrowDown} from 'react-icons/md';

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
    <div className="Button-Container">
      <div ref={domNode} className="Btn-Sub-Container">
        <div className="main-button-wrap">
            <button
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              type="button"
            >
                সকল কোর্স দেখুন &nbsp; <MdKeyboardArrowDown />
            </button>
        </div>
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
                    <button className="single-button-style">
                      Web Development
                    </button>
                    <button className="single-button-style">
                      SEO
                    </button>
                    <button className="single-button-style">
                      Digital Marketing
                    </button>
                    <button className="single-button-style">
                      Content Writing
                    </button>
                    <button className="single-button-style">
                      Programming
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