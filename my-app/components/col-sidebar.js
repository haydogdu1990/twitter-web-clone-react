import React from "react";
import cn from "classnames";
import Navigation from "./navigation";

import styles from "./col-sidebar.module.css";
import ThemeButton from "./theme-button";
import ProfileBox from "./profile-box";
import Tweet from "./icons/Tweet.js";

function Sidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />

      <div className={styles.tweet}>
        <ThemeButton big full={!flat}>
          {flat ? <Tweet/> : "Tweet"}
        </ThemeButton>
      </div>

      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  );
}

export default Sidebar;
