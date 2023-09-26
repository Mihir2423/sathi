import * as React from "react";
import Svg, { Path } from "react-native-svg";

const userIcon = (props) => {
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
        d="M14 14a5.833 5.833 0 100-11.667A5.833 5.833 0 0014 14zM24.022 25.667c0-4.515-4.492-8.167-10.022-8.167S3.98 21.152 3.98 25.667"
        stroke="#202020"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  );
};

export default userIcon;
