import IconBase from "./IconBase";
const IconCross = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase width={width} heigth={heigth} color={color} viewBox="0 0 21 21">
      <g
        fill="none"
        fillRule="evenodd"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(5 5)"
      >
        <path d="m.5 10.5 10-10" />
        <path d="m10.5 10.5-10-10z" />
      </g>
    </IconBase>
  );
};

export default IconCross;
