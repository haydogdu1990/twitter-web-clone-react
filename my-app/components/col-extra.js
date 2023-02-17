import React from "react";
import cn from "classnames";

import styles from "./col-extra.module.css";
import ExtraGecici from "./extra-gecici";


function Extra({ children }) {
  return <div className={cn(styles.extra)}>{ children }</div>;
}

export default Extra;
