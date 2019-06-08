import {string} from "prop-types";

export enum TagName { // private interface
  div = "div",
  a = "a",
  span = "span",
  ul = "ul",
  li = "li",
}

export enum VerticalAlignment {
  top = "top",
  center = "center",
  bottom = "bottom"
}

export enum FontWeight {
  regular = 400,
  medium = 500,
  semibold = 600,
  bold = 700
}

// TODO: This shouldn't be just enum, should
// support other ways to initialize color
export enum Color {
  blue = "#3583f7", // iOS blue
  gray = "#8e8e93",
}

export type ColorType = Color | string;