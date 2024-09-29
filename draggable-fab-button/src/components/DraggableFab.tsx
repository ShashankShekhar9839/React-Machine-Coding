import React, { useEffect, useRef } from "react";
import "../css/draggableFab.css";

interface DraggableFabPropTypes {
  direction?: "left" | "right";
  placeHolderText: string;
  offsetFromBottom: number;
  count: number;
}

const wrapperClasses = (
  direction: string,
  offsetFromBottom: number
): string => {
  let allClasses = "";

  allClasses =
    direction === "left" ? "leftDirectionClasses" : "rightDirectionClasses";

  return allClasses;
};

const DraggableFab: React.FC<DraggableFabPropTypes> = ({
  direction = "left",
  placeHolderText = "Add To Compare",
  offsetFromBottom = 30,
  count = 2,
}) => {
  let containerRef = useRef(null);
  useEffect(() => {
    containerRef?.current?.classList?.add("decreaseWidth");
  }, [count]);

  return (
    <div
      className={`draggable-wrapper ${wrapperClasses(
        direction,
        offsetFromBottom
      )}`}
      ref={containerRef}
    >
      <p>{placeHolderText}</p>
    </div>
  );
};

export default DraggableFab;
