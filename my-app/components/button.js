import React from "react";
import cn from "classnames";

import styles from "./button.module.css";

function Button({ children, className, full = false, ...props }) {
  return (
    <button
      type="button"
      className={cn(styles.button, full && styles.fullWidth, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
