import IconBase from "./IconBase";
const IconWrite = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase width={width} heigth={heigth} color={color} viewBox="0 0 21 21">
      <g
        fill="none"
        fillRule="evenodd"
        stroke={stroke}
        strokelinecap="round"
        strokelinejoin="round"
        transform="translate(2 2)"
      >
        <path
          d="m8.24920737-.79402796c1.17157287 0 2.12132033.94974747 2.12132033 2.12132034v13.43502882l-2.12132033 3.5355339-2.08147546-3.495689-.03442539-13.47488064c-.00298547-1.16857977.94191541-2.11832105 2.11049518-2.12130651.00180188-.00000461.00360378-.00000691.00540567-.00000691z"
          transform="matrix(.70710678 .70710678 -.70710678 .70710678 8.605553 -3.271644)"
        />
        <path d="m7.5 15.5h8" />
        <path d="m13.5 4.5 1 1" />
      </g>
    </IconBase>
  );
};

export default IconWrite;