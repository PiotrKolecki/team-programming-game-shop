import React, { useState } from "react";
import * as P from "./parts";
import { CartStagesEnum, DeliveryOptions } from "../constants";
import home from "../../../../assets/home.svg";
import pin from "../../../../assets/pin.svg";
import RecipientForm from "./DeliveryForms/RecipientForm";
import HomeAddressForm from "./DeliveryForms/HomeAddressForm";
import PickupPointForm from "./DeliveryForms/PickupPoint";

interface DeliveryProps {
  setStage: (stage: CartStagesEnum) => void;
  deliveryOption?: DeliveryOptions;
  onDeliveryOptionChange: (option: DeliveryOptions) => void;
}

export const Delivery: React.FC<DeliveryProps> = ({
  setStage,
  deliveryOption,
  onDeliveryOptionChange,
}) => {
  const onDeliveryClick = (option: DeliveryOptions) => () => {
    onDeliveryOptionChange(option);
    setStage(CartStagesEnum.deliveryOption);
  };

  const [isNextDisabled, setIsNextDisabled] = useState(true);

  return (
    <P.DeliveryWrapper>
      <P.TitleWrapper>
        <P.Title>Choose delivery option</P.Title>
        {deliveryOption && !isNextDisabled && (
          <P.Button
            type="button"
            onClick={() => setStage(CartStagesEnum.paymentMethod)}
          >
            Next
          </P.Button>
        )}
      </P.TitleWrapper>
      <P.OptionsWrapper>
        <P.DeliveryOption
          type="button"
          isActive={deliveryOption === DeliveryOptions.homeAddress}
          onClick={onDeliveryClick(DeliveryOptions.homeAddress)}
        >
          <P.Image src={home} />
          <P.Text>Home address</P.Text>
        </P.DeliveryOption>
        <P.DeliveryOption
          type="button"
          isActive={deliveryOption === DeliveryOptions.pickupPoint}
          onClick={onDeliveryClick(DeliveryOptions.pickupPoint)}
        >
          <P.Image src={pin} />
          <P.Text>Pickup Point</P.Text>
        </P.DeliveryOption>
      </P.OptionsWrapper>
      {deliveryOption && (
        <P.FormWrapper>
          <RecipientForm setIsNextDisabled={setIsNextDisabled} />
          {deliveryOption === DeliveryOptions.homeAddress ? (
            <HomeAddressForm />
          ) : (
            <PickupPointForm />
          )}
        </P.FormWrapper>
      )}
    </P.DeliveryWrapper>
  );
};

export default Delivery;
