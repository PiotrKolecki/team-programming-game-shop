import React from "react";
import { Field } from "react-final-form";
import { OrderFormIDs, pickupAddress, PickupAddress } from "../../constants";
import * as P from "./parts";

const getPickupAddress = (pickup: PickupAddress) =>
  `${pickup.street}, Paczkomat InPost`;

export const PickupPointForm: React.FC = () => (
  <P.FieldsWrapper singleElement>
    <Field name={OrderFormIDs.PACZKOMAT} component="select">
      {({ input }) => (
        <P.InputWrapper>
          <P.Label>Address</P.Label>
          <P.Select {...input}>
            <P.Option key={0} value={getPickupAddress(pickupAddress)}>
              {getPickupAddress(pickupAddress)}
            </P.Option>
          </P.Select>
        </P.InputWrapper>
      )}
    </Field>
  </P.FieldsWrapper>
);

export default PickupPointForm;
