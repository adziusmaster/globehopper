export type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: string;
  labelText: string;
  classNameDiv?: string;
  classNameInput?: string;
  classNameLabel?: string;
  htmlFor?: string;
  inputId?: string;
};
