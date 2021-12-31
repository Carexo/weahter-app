import React from "react";
import NextLink from "next/link";
import { LinkProps } from "./Link.types";

const Link: React.FC<LinkProps> = ({ component, href, children }) => {
  const Component = component || NextLink;

  return <Component href={href}>{children}</Component>;
};

export default Link;
