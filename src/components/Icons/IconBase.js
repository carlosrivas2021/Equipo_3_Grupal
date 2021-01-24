import React from "react";
const IconBase = ({width, height, viewBox, color, children}) => {
  return (
    <svg width={width} height={height} viewBox={viewBox}>
      <g fill={color}>{children}</g>
    </svg>
  );
};

export default IconBase;
