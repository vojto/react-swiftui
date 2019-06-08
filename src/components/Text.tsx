import React from "react";
import {Color, FontWeight, TagName, ColorType} from "./types";
import {Props as ViewProps, View} from "./View";

interface Props extends ViewProps {
  fontWeight?: FontWeight;
  color?: ColorType;
}

export const Text: React.FC<Props> = (props) => {
  const style: React.CSSProperties = {
    ...props.style,
  };

  if (props.fontWeight) {
    style.fontWeight = props.fontWeight;
  }

  if (props.color) {
    style.color = props.color;
  }

  return (
    <View tagName={TagName.span} {...props} style={style}>
      {props.children}
    </View>
  );
};
