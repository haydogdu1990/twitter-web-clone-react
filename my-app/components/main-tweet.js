import React from "react";

{
  /* date-fns */
}
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

import styles from "./main-tweet.module.css";
import Photo from "./photo";
import ButtonIcon from "./button-icon";
import * as Icon from "./icons";

function MainTweet({ name, slug, datetime, text }) {
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

        <div className={styles.content}>{text}</div>

        <footer className={styles.footer}>
          <div className={styles.footerButton}>
            <ButtonIcon className={styles.actionButton}>
              <Icon.Reply />
            </ButtonIcon>
          </div>
          <div className={styles.footerButton}>
            <ButtonIcon className={styles.actionButton}>
              <Icon.Retweet />
            </ButtonIcon>
          </div>
          <div className={styles.footerButton}>
            <ButtonIcon className={styles.actionButton}>
              <Icon.Like />
            </ButtonIcon>
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
