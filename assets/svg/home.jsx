import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeIcon(props) {
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
        d="M12.49.197A.742.742 0 0011.993 0c-.18 0-.355.07-.497.197L0 10.54l.994 1.451L2.4 10.727v11.427c0 .49.17.958.47 1.304.3.346.706.541 1.13.542h16c.424-.001.83-.196 1.13-.542.3-.346.47-.815.47-1.304V10.735L23.006 12 24 10.549 12.49.197zm1.11 21.957h-3.2v-7.385h3.2v7.385zm1.6 0v-7.385c0-.49-.17-.959-.47-1.305-.3-.346-.706-.54-1.13-.541h-3.2c-.424 0-.83.195-1.13.541-.3.346-.47.816-.47 1.305v7.385H4V9.288l8-7.191 8 7.2v12.857h-4.8z"
        fill="#fff"
      />
    </Svg>
  );
}

export default HomeIcon;
