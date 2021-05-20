import React from 'react';
import { Field } from 'react-final-form';
import * as P from './parts';

export const PickupPointForm: React.FC = () => (
   <P.FieldsWrapper singleElement>
      <Field name={'pickupPointAddress'} component="select">
         {({ input }) => (
            <P.InputWrapper>
               <P.Label>Address</P.Label>
               <P.Select {...input}>
                  <P.Option key={0} value={'Ul. Reymonta 17, Paczkomat InPost'}>Ul. Reymonta 17, Paczkomat InPost</P.Option>
               </P.Select>
            </P.InputWrapper>
         )}
      </Field>
   </P.FieldsWrapper>
)

export default PickupPointForm;
