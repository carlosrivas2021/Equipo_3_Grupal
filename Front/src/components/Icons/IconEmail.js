import IconBase from "./IconBase";
const IconEmail = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase width={width} heigth={heigth} color={color} viewBox="0 0 21 21">
      <g
        fill="none"
        fillRule="evenodd"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="matrix(0 -1 1 0 2 17)"
      >
        <path d="m9 14.5h-6.5c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2h7c1.1045695 0 2 .8954305 2 2v7.5" />
        <path d="m11.5 12.5v4" />
        <path d="m2 6 5 3 5-3" transform="matrix(0 1 -1 0 14.5 .5)" />
      </g>
    </IconBase>
  );
};

export default IconEmail;
