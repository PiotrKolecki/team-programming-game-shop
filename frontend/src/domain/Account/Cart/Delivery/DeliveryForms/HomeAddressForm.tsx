import React from 'react';
import { Field } from 'react-final-form';
import { addressDatafield } from './constants';
import * as P from './parts';

export const HomeAddressForm: React.FC = () => (
   <P.FieldsWrapper>
      {addressDatafield.map(({name, label, validate, parse}) => (
         <Field
            key={name}
            name={name}
            parse={parse}
            validate={validate}
            render={({ input, meta }) => (
               <P.InputWrapper>
                  <P.Label>{label}</P.Label>
                  <P.StyledInput {...input} />
                  {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
               </P.InputWrapper>
            )}
         />
      ))}
   </P.FieldsWrapper>
)

export default HomeAddressForm;
