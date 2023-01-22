import React from "react";
import cn from "classnames";
import Navigation from "./navigation";

import styles from "./col-sidebar.module.css";
import ThemeButton from "./theme-button";
import ProfileBox from "./profile-box";

function Sidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />
      <ThemeButton big full>
        Tweet
      </ThemeButton>
      <ProfileBox></ProfileBox>
    </div>
  );
}

export default Sidebar;
