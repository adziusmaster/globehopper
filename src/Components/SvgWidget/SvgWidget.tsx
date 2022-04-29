import { SvgProps } from "./SvgState";

const SvgWidget = (props: SvgProps): JSX.Element => (
  <>
    <svg className={props.className} width={props.width} height={props.height}>
      <use href={props.href} />
    </svg>
  </>
);

export default SvgWidget;
