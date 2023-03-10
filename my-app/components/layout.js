import React from "react";
import cn from "classnames";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./layout.module.css";
import CONST from "../constants";

import Main from "./col-main";
import Sidebar from "./col-sidebar";
import Extra from "./col-extra";
import ExtraGecici from "./extra-gecici";
import TweetSend from "./tweet-send";

function Layout({ children }) {
  const size = useWindowSize();
  return (
    <div className={cn(styles.layout)}>
      <Sidebar flat={size.width < CONST.DESTOP_SIZE}>sidebar</Sidebar>

      <Main>{children}</Main>

      {size.width > CONST.TABLET_SIZE && (
        <Extra>
          <ExtraGecici />
        </Extra>
      )}
    </div>
  );
}

export default Layout;
