import { AnchorLinkProps } from "./AnchorLinkState";

export const AnchorLinkWidget = (props: AnchorLinkProps): JSX.Element => (
  <>
    <a
      className={props.className}
      href={props.href}
      aria-label={props.text}
      key={props.key}
    >
      {props.Svg}
    </a>
  </>
);
