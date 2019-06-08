import React from "react";
import {VerticalAlignment} from "./types";
import {View, Props as ViewProps} from "./View";

interface Props extends ViewProps {
  alignment?: VerticalAlignment;
}

export const HStack: React.FC<Props> = (props) => {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
  };

  if (props.alignment) {
    style.alignItems = props.alignment;
  }

  return (
    <View {...props} style={style}>
      {props.children}
    </View>
  );
}