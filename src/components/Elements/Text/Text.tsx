import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
};

export const Text = ({ children }: TextProps) => {
  return <div>{children}</div>;
};
