// Functional React Component that diplays a button using matural-ui.

import React from "react";

import Progress from "./Progress";

export default {
    title: "Progress",
    component: Progress,
    argTypes: {
        mode: { control: "select", options: ["light", "dark"] },
    },
};

const Template = (args) => <Progress {...args}></Progress>;

export const Default = Template.bind({});

Default.args = {
    mode: "light",
};
