// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const CategoryCloseOutsideClick = (handler) => {
    let domNode = useRef();

    useEffect(() => {
      let maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
  
      document.addEventListener("mousedown", maybeHandler);
  
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
  
    return domNode;
};

export default CategoryCloseOutsideClick;