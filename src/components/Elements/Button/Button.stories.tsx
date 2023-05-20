import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

type T = typeof Button;

export default {
  component: Button,
  args: {
    children: "送信",
  },
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
