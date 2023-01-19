import React from "react";

import styles from "./text-title.module.css";

function TextTitle({ children }) {
  return <h2 className={styles.titleBold}>{children}</h2>;
}
export default TextTitle;
