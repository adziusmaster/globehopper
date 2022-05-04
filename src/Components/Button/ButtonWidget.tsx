import {
  ButtonDefaultProps,
  ButtonPassOneProps as ButtonSpecialProps,
} from "./ButtonState";

export const ButtonWidget = (props: ButtonDefaultProps): JSX.Element => (
  <>
    <div className={props.classNameDiv} key={props.key}>
      <button
        className={props.classNameButton}
        onClick={props.onClick}
        hidden={props.hidden}
        aria-label={props.aria}
        aria-controls={props.ariaControls ? props.ariaControls : undefined}
        aria-expanded={props.ariaControls ? props.ariaExpanded : false}
      >
        {props.label}
      </button>
    </div>
  </>
);
export const ButtonSpecialWidget = (props: ButtonSpecialProps): JSX.Element => (
  <>
    <div className={props.classNameDiv} key={props.key}>
      <button
        className={props.classNameButton}
        onClick={props.onClick}
        hidden={props.hidden}
        aria-label={props.aria}
        aria-controls={props.ariaControls ? props.ariaControls : undefined}
        aria-expanded={props.ariaControls ? props.ariaExpanded : false}
      >
        {props.label}
      </button>
    </div>
  </>
);

export const ButtonSpecialNoDivWidget = (
  props: ButtonSpecialProps
): JSX.Element => (
  <>
    <button
      className={props.classNameButton}
      onClick={props.onClick}
      hidden={props.hidden}
      disabled={props.disabled}
      aria-label={props.aria}
      aria-controls={props.ariaControls ? props.ariaControls : undefined}
      aria-expanded={props.ariaControls ? props.ariaExpanded : false}
    >
      {props.label}
    </button>
  </>
);
