export type LoginProps = {
  onEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: () => void;
};
