import { ButtonSpecialNoDivWidget } from "../Button/ButtonWidget";
import { ModalProps } from "./CountryOverviewState";
import * as Icons from "react-bootstrap-icons";

export const CountryDetailsModal = (props: ModalProps): JSX.Element => (
  <>
    {props.modalVisible ? (
      <>
        <div className="modal" id="modal">
          <h2>Country Details Modal Window</h2>
          <div className="content">Crazy modal content</div>
          <div className="actions">
            {ButtonSpecialNoDivWidget({
              key: "info",
              onClick: () => props.showModal(props.country),
              classNameButton: "teaser__action teaser__info",
              aria: `More information about ${props.country.name.common}`,
              Svg: (
                <>
                  <Icons.X size={24} color="" />
                </>
              ),
            })}
          </div>
        </div>
      </>
    ) : (
      <></>
    )}
  </>
);
