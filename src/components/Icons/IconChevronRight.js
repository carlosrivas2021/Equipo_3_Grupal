import IconBase from "./IconBase";
const IconChevronRight = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase width={width} heigth={heigth} color={color} viewBox="0 0 21 21">
      <path
        d="m.5 8.5 4-4-4-4"
        fill="none"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        transform="translate(9 6)"
      />
    </IconBase>
  );
};

export default IconChevronRight;
