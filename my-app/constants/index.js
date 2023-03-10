import * as Icon from "../components/icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  TABLET_SIZE: 1022,
  DESTOP_SIZE: 1298,
};

export const MENU = [
  {
    key: "twitter",
    path: "/",
    icon: <Icon.Twitter style={{ fontSize: 30 }} />,
    iconSelected: <Icon.Twitter style={{ fontSize: 30 }} />,
    title: "",
    notify: 0,
  },
  {
    key: "home",
    path: "/",
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeFill />,
    title: "Home",
    notify: 0,
  },
  {
    key: "explore",
    path: "/explore",
    icon: <Icon.Explore />,
    iconSelected: <Icon.ExplorerFill />,
    title: "Explore",
    notify: 0,
  },
  {
    key: "communities",
    path: "/communities",
    icon: <Icon.Communities />,
    iconSelected: <Icon.CommunitiesFill />,
    title: "Communities",
    notify: 0,
  },
  {
    key: "notifications",
    path: "/notifications",
    icon: <Icon.Notification />,
    iconSelected: <Icon.NotificationFill />,
    title: "Notifications",
    notify: 5,
  },
  {
    key: "messages",
    path: "/messages",
    icon: <Icon.Messages />,
    iconSelected: <Icon.MessagesFill />,
    title: "Messages",
    notify: 1,
  },
  {
    key: "bookmarks",
    path: "/bookmarks",
    icon: <Icon.Bookmark />,
    iconSelected: <Icon.BookmarkFill />,
    title: "Bookmarks",
    notify: 0,
  },

  {
    key: "profile",
    path: "/profile",
    icon: <Icon.Profile />,
    iconSelected: <Icon.ProfileFill />,
    title: "Profile",
    notify: 0,
  },
  {
    key: "more",
    path: "/more",
    icon: <Icon.More />,
    iconSelected: <Icon.More />,
    title: "More",
    notify: 0,
  },
];
