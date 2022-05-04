type ButtonProps = {
  key: string;
  label: JSX.Element | string;
  hidden?: boolean;
  form?: string;
  aria?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  classNameButton?: string;
  classNameDiv?: string;
  disabled?: boolean;
};

export type ButtonDefaultProps = ButtonProps & {
  onClick: () => void;
};

export type ButtonPassOneProps = ButtonProps & {
  onClick: (a: any) => void;
};
