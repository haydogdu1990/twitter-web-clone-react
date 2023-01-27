/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import * as Icons from "../components/icons";
import Photo from "../components/photo";
import ProfileBox from "../components/profile-box";

export default {
  title: "Icons",
};

export const Icon = () => (
  <div className="icons">
    <Icons.ArrowBottom />
    <Icons.Bookmark />
    <Icons.BookmarkFill />
    <Icons.Emoji />
    <Icons.Explore />
    <Icons.ExplorerFill />
    <Icons.Gif />
    <Icons.Home />
    <Icons.HomeFill />
    <Icons.Like />
    <Icons.Lists />
    <Icons.ListsFill />
    <Icons.Media />
    <Icons.MessagesFill />
    <Icons.More />
    <Icons.Messages />
    <Icons.Notification />
    <Icons.NotificationFill />
    <Icons.Options />
    <Icons.Profile />
    <Icons.ProfileFill />
    <Icons.Question />
    <Icons.Reply />
    <Icons.Retweet />
    <Icons.Search />
    <Icons.Share />
    <Icons.TimelineProp />
    <Icons.Twitter />
    <Icons.Tweet />
  </div>
);

export const ProfilePhoto = () => <Photo />;

export const Box = () => <ProfileBox />;
