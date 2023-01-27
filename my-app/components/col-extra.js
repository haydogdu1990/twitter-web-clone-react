import React from "react";
import cn from "classnames";
import GeciciExtra from "./gecici-extra";
import styles from "./col-extra.module.css";



function Extra({ children }) {
  return <div className={cn(styles.extra)}>{children}
    <GeciciExtra/>
  </div>;
}

export default Extra;
