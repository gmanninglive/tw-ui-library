import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/button/Button";
import { ButtonProps } from "../components/button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  variant: "secondary",
};

export const Large = Template.bind({});
Large.args = {
  children: "Button",
  variant: "primary_large",
};

export const Small = Template.bind({});
Small.args = {
  children: "Button",
  variant: "primary_small",
};
