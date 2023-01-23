import React from "react";
import cn from "classnames";
import Image from "next/image";

import styles from "./photo.module.css";
import avatar from "./images/tYRiNFtk_400x400.jpg";

function Photo({ src = avatar, alt, size = 47 }) {
  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <Image className={styles.img} src={avatar} alt={alt} width={size} />
    </div>
  );
}

export default Photo;
