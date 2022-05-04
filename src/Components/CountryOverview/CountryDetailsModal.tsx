import { ButtonSpecialNoDivWidget } from "../Button/ButtonWidget";
import { ModalProps } from "./CountryOverviewState";
import * as Icons from "react-bootstrap-icons";

export const CountryDetailsModal = (props: ModalProps): JSX.Element => (
  <>
    {props.modalVisible ? (
      <>
        <div className="modal" id={props.id} aria-hidden="false">
          <div className="modal__outer">
            <div className="modal__inner">
              <h2 className="modal__title">{props.country.name.common}</h2>

              <h3 className="modal__subtitle">Country Details:</h3>
              <div className="modal__content">
                <dl className="modal__list">
                  <dt className="modal__label">Official name:</dt>
                  <dd className="modal__value">{props.country.name.official}</dd>

                  <dt className="modal__label">Continent:</dt>
                  <dd className="modal__value">{props.country.continents}</dd>
                </dl>
              </div>

              <div className="modal__action">
                {ButtonSpecialNoDivWidget({
                  key: "close",
                  onClick: () => props.showModal(props.country),
                  classNameButton: "modal__icon",
                  aria: `Close information from ${props.country.name.common}`,
                  label: (
                    <>
                      <Icons.X size={24} color="" />
                    </>
                  ),
                })}
              </div>
            </div>
          </div>
          <div className="modal__bg" aria-hidden="true" onClick={() => props.showModal(props.country)} />
        </div>
      </>
    ) : (
      <></>
    )}
  </>
);
