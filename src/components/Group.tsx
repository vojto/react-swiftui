import React from "react";
import {View, Props as ViewProps} from "./View";

interface Props extends ViewProps {
}

export const Group: React.FC<Props> = (props) => {
  return (
    <View {...props}>{props.children}</View>
  );
}