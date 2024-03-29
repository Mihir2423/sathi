import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EducationIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M18.54 12.48c.32.563.558 1.149.714 1.758.156.61.238 1.239.246 1.887v1.207L12 21.094l-7.5-3.762c0-.469.004-.906.012-1.313.008-.406.043-.8.105-1.183.063-.383.156-.766.281-1.149.125-.382.313-.785.563-1.207L3 11.25v6.879c.227.078.43.187.61.328.18.14.34.305.48.492.14.188.242.39.305.61.062.218.097.449.105.691V24H0v-3.75c0-.234.035-.46.105-.68.07-.218.172-.425.305-.62.133-.196.29-.36.469-.493.18-.133.387-.242.621-.328V10.5L0 9.75l12-6 12 6-5.46 2.73zM3 20.25a.72.72 0 00-.223-.527.72.72 0 00-.527-.223.72.72 0 00-.527.223.72.72 0 00-.223.527v2.25H3v-2.25zm.352-10.5L12 14.074l8.648-4.324L12 5.426 3.352 9.75zM18 16.406c0-.601-.059-1.16-.176-1.675a6.088 6.088 0 00-.62-1.583L12 15.75l-5.203-2.602a5.99 5.99 0 00-.586 1.43A6.367 6.367 0 006 16.125v.281l6 3 6-3z"
        fill="#fff"
      />
    </Svg>
  )
}

export default EducationIcon
