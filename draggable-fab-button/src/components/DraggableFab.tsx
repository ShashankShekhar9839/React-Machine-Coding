import React, { useEffect, useRef, useState } from "react";
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
  console.log("rendering");
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [startPosition, setStartPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isSnapping, setIsSnapping] = useState(false);
  let containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    containerRef?.current?.classList?.add("decreaseWidth");
    containerRef?.current?.addEventListener(
      "transitionend",
      handleTransitionEnd
    );
    return () => {
      containerRef?.current?.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, [count, isSnapping]);

  const handleDrageStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    const touch = "touches" in e ? e.touches[0] : e;
    setStartPosition({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    snapToClosestEdge();
    setIsSnapping(true);
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (isDragging) {
      const touch = "touches" in e ? e.touches[0] : e;
      const newX = touch.clientX - startPosition.x;
      const newY = touch.clientY - startPosition.y;

      setPosition({
        x: Math.max(0, newX),
        y: Math.max(0, newY),
      });
    }
  };

  const snapToClosestEdge = () => {
    const screenWidth = window.innerWidth;
    const elementWidth = containerRef.current?.offsetWidth || 0;
    if (position.x + elementWidth / 2 < screenWidth / 2) {
      setPosition((prev) => ({ ...prev, x: 0 }));
    } else {
      setPosition((prev) => ({ ...prev, x: screenWidth - elementWidth - 15 }));
    }
  };

  const handleTransitionEnd = () => {
    setIsSnapping(false);
  };

  return (
    <div
      className={`draggable-wrapper ${wrapperClasses(
        direction,
        offsetFromBottom
      )}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        position: "absolute",
        transition: isSnapping ? "transform 0.4s ease" : "none",
      }}
      ref={containerRef}
      onTouchStart={handleDrageStart}
      onTouchEnd={handleDragEnd}
      onTouchMove={handleDragMove}
    >
      <p>{placeHolderText}</p>
    </div>
  );
};

export default DraggableFab;
