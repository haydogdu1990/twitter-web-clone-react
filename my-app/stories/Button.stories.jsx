/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Button from "../components/button";
import NavigationButton from "../components/navigation-button";
import Navigation from "../components/navigation";

import { Home } from "../components/icons";
import TitleBold from "../components/text-title";
import ThemeButton from "../components/theme-button";
import Stack from "../components/stack";

//import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Normal = () => <Button>Save</Button>;
export const Theme = () => (
  <Stack column>
    <ThemeButton>Tweet Button</ThemeButton>
    <ThemeButton full>Tweet Full Button</ThemeButton>
    <ThemeButton full big>
      Tweet Big Button
    </ThemeButton>
  </Stack>
);

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </NavigationButton>
);

export const Nav = () => <Navigation selectedKey="home" />;
