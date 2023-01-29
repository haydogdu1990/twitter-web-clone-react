import React from "react";
import Image from "next/image";

{
  /* date-fns */
}
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

import styles from "./main-tweet.module.css";
import Photo from "./photo";
import ButtonIcon from "./button-icon";
import * as Icon from "./icons";

function MainTweet({
  name,
  slug,
  datetime,
  text,
  tweetPhoto,
  alt,
  wsize = 47,
  hsize = 47,
  ...props
}) {
  return (
    <article className={styles.maintweet}>
      {/* avatar */}
      <div className={styles.avatar}>
        <Photo />
      </div>

      {/* body */}
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span> <span>@{slug}</span> ·{" "}
          <span>{formatDistanceToNowStrict(datetime)}</span>
        </header>

        <div className={styles.content}>
          {text}

          <div className={styles.photo}>
            {tweetPhoto ? (
              <Image
                className={styles.img}
                src={tweetPhoto}
                alt={alt}
                width="500"
                height="auto"
              />
            ) : null}
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerButton}>
            <ButtonIcon className={styles.actionButton}>
              <Icon.Reply />
            </ButtonIcon>
            <span>{props.replyValue}</span>
          </div>
          <div className={styles.footerButton}>
            <ButtonIcon className={styles.actionButton}>
              <Icon.Retweet />
            </ButtonIcon>
            <span>{props.retweetValue}</span>
          </div>
          <div className={styles.footerButton}>
            <ButtonIcon className={styles.actionButton}>
              <Icon.Like />
            </ButtonIcon>
            <span>{props.likeValue}</span>
          </div>
          <div className={styles.footerButton}>
            <ButtonIcon className={styles.actionButton}>
              <Icon.Share />
            </ButtonIcon>
          </div>
        </footer>
      </div>
    </article>
  );
}

export default MainTweet;
