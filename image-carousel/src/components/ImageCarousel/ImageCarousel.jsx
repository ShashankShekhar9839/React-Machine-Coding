import React, { Children, cloneElement, useEffect } from "react";
import "./imageCarousel.css";
import Card from "../Card";

const ImageCarousel = (props) => {
  const { oneViewCount, children } = props;

  const widthOfEachChildren = 100 / oneViewCount;
  const styledChildren = Children.map(children, (child) =>
    cloneElement(child, {
      style: {
        width: `${widthOfEachChildren}%`,
      },
    })
  );
  return <div className="image-carousel-wrapper">{styledChildren}</div>;
};

export default ImageCarousel;
