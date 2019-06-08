import React from "react";
import {View, Props as ViewProps} from "./View";
import {TagName} from "./types";

interface Props extends ViewProps {
  children: React.ReactElement[];
}

export const List: React.FC<Props> = (props) => {
  return (
    <View tagName={TagName.ul} {...props}>
      {props.children}
    </View>
  );
}