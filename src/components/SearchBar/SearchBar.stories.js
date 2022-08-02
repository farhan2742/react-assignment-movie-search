// Functional React Component that diplays a button using matural-ui.

import React from "react";

import SearchBar from "./SearchBar";

export default {
    title: "Search Bar",
    component: SearchBar,
    argTypes: {
        placeholder: { control: "text" },
        width: { control: "number" },
        onChange: { action: "Text Typed" },
        clickHandler: { action: "clicked" },
        mode: { control: "select", options: ["light", "dark"] },
    },
};

const Template = (args) => <SearchBar {...args}></SearchBar>;

export const Small = Template.bind({});

Small.args = {
    placeholder: "Search Movies",
    width: 400,
};

export const Medium = Template.bind({});
Medium.args = {
    placeholder: "Search Movies",
    width: 800,
};

export const Large = Template.bind({});
Large.args = {
    placeholder: "Search Movies",
    width: 1000,
};

// Our storybook will render our component with some text.
