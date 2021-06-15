import React from 'react';
import { Field } from 'react-final-form';
import { recipientDataFields } from './constants';
import * as P from './parts';

type RecipientFormProps = {
   setIsNextDisabled: (value: boolean) => void
};

export const RecipientForm: React.FC<RecipientFormProps> = ({ setIsNextDisabled }) => (
   <P.FieldsWrapper>
      {recipientDataFields.map(({name, label, validate, parse}) => (
         <Field
            key={name}
            name={name}
            parse={parse}
            validate={validate}
            render={({ input, meta }) => {
               if(!meta.error && name === 'delivery.email') {
                  setIsNextDisabled(false);
               }
               else if(meta.error && name === 'delivery.email'){
                  setIsNextDisabled(true);
               }
               return(
               <P.InputWrapper>
                  <P.Label>{label}</P.Label>
                  <P.StyledInput {...input} />
                  {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
               </P.InputWrapper>
            )}}
         />
      ))}
   </P.FieldsWrapper>
)

export default RecipientForm;
