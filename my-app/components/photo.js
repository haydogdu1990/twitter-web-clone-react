import React from "react";
import cn from "classnames";
import Image from "next/image";

import styles from "./photo.module.css";
import avatar from "./images/tYRiNFtk_400x400.jpg";

function Photo({ src = avatar, alt }) {
  return (
    <div className={cn([styles.photo])}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  );
}

export default Photo;
