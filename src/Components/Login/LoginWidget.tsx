import { Action, IOWidget } from "widgets-for-react";
import { ButtonWidget } from "../Button/ButtonWidget";
import InputWidget from "../Input/InputWidget";
import { LoginProps } from "./LoginState";

export const LoginWidget = (props: LoginProps): JSX.Element => {
  return (
    <main className="main">
      <div className="main__inner container">
        <div className="login">
          <div className="login__inner">
            {InputWidget({
              inputType: "text",
              labelText: "E-mail",
              onChange: props.onEmail,
              classNameDiv: "login__field",
              classNameLabel: "login__label",
              classNameInput: "login__input",
              htmlFor: "l-email",
              inputId: "l-email",
            })}
            {InputWidget({
              inputType: "text",
              labelText: "Password",
              onChange: props.onPassword,
              classNameDiv: "login__field",
              classNameLabel: "login__label",
              classNameInput: "login__input",
              htmlFor: "l-password",
              inputId: "l-password",
            })}
            {ButtonWidget({
              key: "loginButton",
              onClick: props.onLogin,
              buttontext: "Continue",
              classNameButton: "button",
              classNameDiv: "login__action",
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
