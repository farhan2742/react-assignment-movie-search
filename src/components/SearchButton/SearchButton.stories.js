// Functional React Component that diplays a button using matural-ui.

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchButton from "./SearchButton";

export default {
    title: "Search Button",
    component: SearchButton,
    argTypes: {
        variant: { control: "select", options: ["outlined", "contained"] },
        color: {
            control: "select",
            options: ["primary", "secondary", "success", "error"],
        },
        children: { control: "text" },
        icon: { control: "boolean" },
        clickHandler: { action: "clicked" },
        mode: { control: "select", options: ["light", "dark"] },
    },
};

const Template = (args) => <SearchButton {...args}></SearchButton>;

export const Primary = Template.bind({});
Primary.args = {
    variant: "contained",
    children: "Search",
    color: "primary",
    icon: true,
};

export const Icon = Template.bind({});
Icon.args = {
    variant: "contained",
    children: <SearchIcon />,
    icon: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "contained",
    children: "Search",
    color: "secondary",
    icon: true,
};

export const Success = Template.bind({});
Success.args = {
    variant: "contained",
    children: "Search",
    color: "success",
    icon: true,
};

export const Danger = Template.bind({});
Danger.args = {
    variant: "contained",
    children: "Search",
    color: "error",
    icon: true,
};

// Our storybook will render our component with some text.
