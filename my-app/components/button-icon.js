import React from "react";
import cn from "classnames";

import styles from "./button-icon.module.css";
import Button from "./button";

function ButtonIcon({ children, className, ...props }) {
  return (
    <Button className={cn(styles.buttonIcon, className)} {...props}>
      {children}
    </Button>
  );
}

export default ButtonIcon;
