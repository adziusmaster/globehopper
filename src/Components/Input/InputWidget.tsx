import { InputProps } from "./InputState";

const InputWidget = (props: InputProps): JSX.Element => (
  <>
    <div className={props.classNameDiv}>
      <label className={props.classNameLabel} htmlFor={props.htmlFor}>
        {props.labelText}
      </label>
      <input
        className={props.classNameInput}
        id={props.inputId}
        type={props.inputType}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  </>
);
export default InputWidget;
