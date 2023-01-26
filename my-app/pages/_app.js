import React, { useState, useEffect, useLayoutEffect } from "react";

import "@/styles/globals.css";

import StoreContext from "../store";

export default function App({ Component, pageProps }) {
  const [theme, themeSet] = useState(null);

  useLayoutEffect(() => {
    const theme = localStorage.getItem("THEME") || "light";
    themeSet(theme);
  }, []);

  const changeTheme = (theme) => {
    themeSet(theme);
    localStorage.setItem("THEME", theme);
  };

  useEffect(() => {
    const $html = document.querySelector("html");

    $html.classList.remove("light");
    $html.classList.remove("dark");
    $html.classList.remove("dim");

    $html.classList.add(theme);
  }, [theme]);

  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}
