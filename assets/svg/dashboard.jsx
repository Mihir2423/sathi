import * as React from "react";
import Svg, { Path } from "react-native-svg";

const dashBoardIcon = (props) => {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M25.667 9.94V4.643c0-1.645-.747-2.31-2.602-2.31h-4.713c-1.855 0-2.602.665-2.602 2.31v5.285c0 1.657.747 2.31 2.602 2.31h4.713c1.855.012 2.602-.653 2.602-2.298zM25.667 23.065v-4.713c0-1.855-.747-2.602-2.602-2.602h-4.713c-1.855 0-2.602.747-2.602 2.602v4.713c0 1.855.747 2.602 2.602 2.602h4.713c1.855 0 2.602-.747 2.602-2.602zM12.25 9.94V4.643c0-1.645-.746-2.31-2.601-2.31H4.934c-1.855 0-2.601.665-2.601 2.31v5.285c0 1.657.746 2.31 2.601 2.31H9.65c1.855.012 2.601-.653 2.601-2.298zM12.25 23.065v-4.713c0-1.855-.746-2.602-2.601-2.602H4.934c-1.855 0-2.601.747-2.601 2.602v4.713c0 1.855.746 2.602 2.601 2.602H9.65c1.855 0 2.601-.747 2.601-2.602z"
        stroke="#111"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  );
};

export default dashBoardIcon;
