import React from 'react';
import { Field } from 'react-final-form';
import { recipientDataFields } from './constants';
import * as P from './parts';

export const RecipientForm: React.FC = () => (
   <P.FieldsWrapper>
      {recipientDataFields.map(({name, label, validate, parse}) => (
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

export default RecipientForm;
