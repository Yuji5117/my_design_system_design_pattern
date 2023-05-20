import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

type T = typeof Text;

export default {
  component: Text,
  args: {
    children: "default",
  },
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
