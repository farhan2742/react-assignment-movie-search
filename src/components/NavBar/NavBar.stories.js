// Story file for NavBar

import React from "react";
import NavBar from "./NavBar";
import logo from "../../../public/logo192.png";

export default {
    title: "NavBar",
    component: NavBar,
    argTypes: {
        mode: { control: "select", options: ["light", "dark"] },
    },
};

const Template = (args) => <NavBar {...args}></NavBar>;

export const Default = Template.bind({});

Default.args = {
    logoSrc: logo,
    mode: "light",
};
