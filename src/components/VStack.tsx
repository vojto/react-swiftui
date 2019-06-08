import React from "react";
import {View, Props as ViewProps} from "./View";

interface Props extends ViewProps {
}

export const VStack: React.FC<Props> = (props) => {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  return (
    <View {...props} style={style}>
      {props.children}
    </View>
  );
};
