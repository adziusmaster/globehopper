import {
  ButtonDefaultProps,
  ButtonPassOneProps as ButtonSpecialProps,
} from "./ButtonState";

export const ButtonWidget = (props: ButtonDefaultProps): JSX.Element => (
  <>
    <div className={props.classNameDiv} key={props.key}>
      {props.Svg === undefined ? (
        <button
          className={props.classNameButton}
          onClick={props.onClick}
          hidden={props.hidden}
          aria-label={props.aria}
        >
          {props.buttontext}
        </button>
      ) : (
        <button
          className={props.classNameButton}
          onClick={props.onClick}
          hidden={props.hidden}
          aria-label={props.aria}
        >
          {props.Svg}
        </button>
      )}
    </div>
  </>
);
export const ButtonSpecialWidget = (props: ButtonSpecialProps): JSX.Element => (
  <>
    <div className={props.classNameDiv} key={props.key}>
      {props.Svg === undefined ? (
        <button
          className={props.classNameButton}
          onClick={props.onClick}
          hidden={props.hidden}
          aria-label={props.aria}
        >
          {props.buttontext}
        </button>
      ) : (
        <button
          className={props.classNameButton}
          onClick={props.onClick}
          hidden={props.hidden}
          aria-label={props.aria}
        >
          {props.Svg}
        </button>
      )}
    </div>
  </>
);
