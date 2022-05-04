import { ModalProps } from "./CountryOverviewState";

export const CountryDetailsModal = (props: ModalProps): JSX.Element => (
  <>
    {props.modalVisible ? (
      <>
        <div>hello modal</div>
      </>
    ) : (
      <></>
    )}
  </>
);
