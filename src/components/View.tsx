import React from "react";
import {ColorType, TagName} from "./types";

export interface Props {
  frame?: {width?: number; height?: number};
  padding?: true | number; // TODO: This is now shared with VStack and HStack, needs to be refactored
  border?: {color: ColorType; width: number; cornerRadius?: number};
  shadow?: {color: ColorType, radius: number, x: number, y: number};

  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;

  tagName?: TagName;
  className?: string;
}

export const View: React.FC<Props> = (props) => {
  const style: React.CSSProperties = {
    textAlign: "center",
    ...props.style,
  };

  if (props.padding === undefined) {
    // pass
  } else if (props.padding === true) {
    style.padding = "16px";
  } else if (!isNaN(props.padding)) {
    style.padding = `${props.padding}px`;
  }

  if (props.frame !== undefined) {
    const {width, height} = props.frame;
    style.width = width ? `${width}px` : undefined;
    style.height = height ? `${height}px` : undefined;
  }

  if (props.border !== undefined) {
    const {color, width, cornerRadius} = props.border;
    style.border = `${width}px solid ${color}`;
    style.borderRadius =
      cornerRadius !== undefined ? `${cornerRadius}px` : undefined;
  }

  if (props.shadow !== undefined) {
    const {color, radius, x, y} = props.shadow;
    style.boxShadow = `${x}px ${y}px ${radius}px ${color}`;
  }

  const allProps = {style, children: props.children};
  let {tagName} = props;

  if (tagName === undefined) {
    tagName = TagName.div;
  }

  // TODO: This can probably be improved

  if (tagName === "div") {
    return <div {...allProps} />;
  } else if (tagName === "span") {
    return <span {...allProps} />;
  } else if (tagName === "a") {
    return <a {...allProps} />;
  } else if (tagName === "ul") {
    return <ul {...allProps} />;
  } else if (tagName === "li") {
    return <li {...allProps} />;
  } else {
    throw new Error(`unexpected tagName ${tagName}`);
  }
};
