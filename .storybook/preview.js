import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { Provider } from "react-redux";
import store from "../src/store/store";

addDecorator((story) => (
    <Provider store={store}>
        <Center>{story()}</Center>
    </Provider>
));

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
