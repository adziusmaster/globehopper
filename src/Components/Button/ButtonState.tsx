import { ReactFragment } from "react";

type ButtonProps = {
  key: string;
  buttontext?: string;
  hidden?: boolean;
  form?: string;
  aria?: string;
  classNameButton?: string;
  classNameDiv?: string;
  disabled?: boolean;
};

export type ButtonDefaultProps = ButtonProps & {
  onClick: () => void;
  Svg?: JSX.Element;
};

export type ButtonPassOneProps = ButtonProps & {
  onClick: (a: any) => void;
  Svg?: JSX.Element;
};
