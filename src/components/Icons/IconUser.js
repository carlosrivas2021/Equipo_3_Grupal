import IconBase from "./IconBase";
const IconUser = ({ width, heigth, color, stroke }) => {
  return (
    <IconBase width={width} heigth={heigth} color={color} viewBox="0 0 21 21">
      <path
        d="m7.5.5c1.65685425 0 3 1.34314575 3 3v1c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-1c0-1.65685425 1.34314575-3 3-3zm7 14c0-.2427251 0-.4854502 0-.7281753 0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 2)"
      />
    </IconBase>
  );
};

export default IconUser;
