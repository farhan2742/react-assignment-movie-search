// Functional React Component that diplays a button using matural-ui.

import React from "react";

import Footer from "./Footer";

export default {
    title: "Footer",
    component: Footer,
    argTypes: {
        mode: { control: "select", options: ["light", "dark"] },
    },
};

const Template = (args) => <Footer {...args}></Footer>;

export const Default = Template.bind({});

Default.args = {
    mode: "light",
};
