import React from 'react';
import { Field } from 'react-final-form';
import { CartStagesEnum } from '../constants';
import * as P from './parts'

interface PaymentProps {
   stage: CartStagesEnum;
}

export const Payment: React.FC<PaymentProps> = ({ stage }) => (
   <P.Wrapper>
      {stage === CartStagesEnum.paymentMethod && (
         <P.PaymentWrapper>
            <P.TitleWrapper>
               <P.Title>Choose payment method</P.Title>
               <P.Button>Next</P.Button>
            </P.TitleWrapper>
            <P.FieldsWrapper>
               <Field
                  name={'paymentMethod'}
                  type="radio"
                  value="blik"
                  render={({ input }) => (
                     <P.InputWrapper onClick={() => input.onChange('blik')}>
                        <P.Circle isChecked={input.checked}><P.Fill /></P.Circle>
                        <P.Label>Blik</P.Label>
                     </P.InputWrapper>
                  )}
               />
               <Field
                  name={'paymentMethod'}
                  type="radio"
                  value="visa"
                  render={({ input }) => (
                     <P.InputWrapper onClick={() => input.onChange('visa')}>
                        <P.Circle isChecked={input.checked}><P.Fill /></P.Circle>
                        <P.Label>Visa</P.Label>
                     </P.InputWrapper>
                  )}
               />
               <Field
                  name={'paymentMethod'}
                  type="radio"
                  value="transfer"
                  render={({ input }) => (
                     <P.InputWrapper onClick={() => input.onChange('transfer')}>
                        <P.Circle isChecked={input.checked}><P.Fill /></P.Circle>
                        <P.Label>Online transfer</P.Label>
                     </P.InputWrapper>
                  )}
               />
            </P.FieldsWrapper>
         </P.PaymentWrapper>
      )}
   </P.Wrapper>
);

export default Payment;
