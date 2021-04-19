import React, { useState } from 'react';
import * as P from './parts'
import AccountWrapper from '../AccountWrapper/AccountWrapper';
import { Field, Form } from 'react-final-form';
import { normalizeToNumber, normalizeToZipCode } from './helpers';
import { fieldRequired, basicValidation } from './validators';

// FIXME: use selector to get info about user
const mockData = {
   email: 'example@mock.pl',
   name: 'Example',
   surname: 'Mock',
   phone: '123456789',
   birthDate: '2021-04-20',
   street: 'mock street',
   houseNumber: '123',
   apartment: '9',
   code: '12-123',
   city: 'Mock City',
   country: 'Mock Country',
}

export const PersonalData: React.FC = () => {
   const [isEditEnable, setIsEditEnable] = useState(false);

   const onSubmit = (values: Record<string, string>) => {
      console.log(values);
      setIsEditEnable(false);
      // FIXME: Dispatch save action
   }

   const onEditClick = (e: any) => {
      e.preventDefault();
      setIsEditEnable(true);
   }

   return (
      <AccountWrapper pageTitle="profile" breadcrumbs={['Home', 'Profile']}>
         <P.PersonalDataWrapper>
            <Form
               onSubmit={onSubmit}
               render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                     <P.UserDataWrapper>
                        <P.Col>
                           <Field
                              name="name"
                              initialValue={mockData.name}
                              validate={basicValidation}
                              render={({ input, meta }) => (
                                 <P.InputWrapper>
                                    <P.Label>First name</P.Label>
                                    <P.StyledInput {...input} disabled={!isEditEnable} />
                                    {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
                                 </P.InputWrapper>
                              )}
                           />
                           <Field
                              name="surname"
                              initialValue={mockData.surname}
                              validate={basicValidation}
                              render={({ input, meta }) => (
                                 <P.InputWrapper>
                                    <P.Label>Last name</P.Label>
                                    <P.StyledInput {...input} disabled={!isEditEnable} />
                                    {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
                                 </P.InputWrapper>
                              )}
                           />
                           <Field
                              name="phone"
                              initialValue={mockData.phone}
                              parse={(value) => value ? normalizeToNumber(value) : value}
                              validate={basicValidation}
                              render={({ input, meta }) => (
                                 <P.InputWrapper>
                                    <P.Label>Phone number</P.Label>
                                    <P.StyledInput {...input} disabled={!isEditEnable} />
                                    {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
                                 </P.InputWrapper>
                              )}
                           />
                           <Field
                              name="birthDate"
                              initialValue={mockData.birthDate}
                              validate={fieldRequired}
                              render={({ input, meta }) => (
                                 <P.InputWrapper>
                                    <P.Label>Date of birth</P.Label>
                                    <P.StyledInput {...input} type="date" disabled={!isEditEnable} />
                                    {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
                                 </P.InputWrapper>
                              )}
                           />
                        </P.Col>
                        <P.Col>
                           <Field
                              name="street"
                              initialValue={mockData.street}
                              validate={basicValidation}
                              render={({ input, meta }) => (
                                 <P.InputWrapper>
                                    <P.Label>Street</P.Label>
                                    <P.StyledInput {...input} disabled={!isEditEnable} />
                                    {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
                                 </P.InputWrapper>
                              )}
                           />
                           <Field
                              name="houseNumber"
                              initialValue={mockData.houseNumber}
                              parse={(value) => value ? normalizeToNumber(value) : value}
                              validate={fieldRequired}
                              render={({ input, meta }) => (
                                 <P.InputWrapper>
                                    <P.Label>House number</P.Label>
                                    <P.StyledInput {...input} disabled={!isEditEnable} />
                                    {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
                                 </P.InputWrapper>
                              )}
                           />
                           <Field
                              name="apartment"
                              initialValue={mockData.apartment}
                              parse={(value) => value ? normalizeToNumber(value) : value}
                              validate={fieldRequired}
                              render={({ input, meta }) => (
                                 <P.InputWrapper>
                                    <P.Label>Apartment number</P.Label>
                                    <P.StyledInput {...input} disabled={!isEditEnable} />
                                    {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
                                 </P.InputWrapper>
                              )}
                           />
                           <Field
                              name="code"
                              initialValue={mockData.code}
                              parse={(value) => value ? normalizeToZipCode(value) : value}
                              validate={basicValidation}
                              render={({ input, meta }) => (
                                 <P.InputWrapper>
                                    <P.Label>Zip code</P.Label>
                                    <P.StyledInput {...input} disabled={!isEditEnable} />
                                    {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
                                 </P.InputWrapper>
                              )}
                           />
                           <Field
                              name="city"
                              initialValue={mockData.city}
                              validate={basicValidation}
                              render={({ input, meta }) => (
                                 <P.InputWrapper>
                                    <P.Label>City</P.Label>
                                    <P.StyledInput {...input} disabled={!isEditEnable} />
                                    {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
                                 </P.InputWrapper>
                              )}
                           />
                           <Field
                              name="country"
                              initialValue={mockData.country}
                              validate={basicValidation}
                              render={({ input, meta }) => (
                                 <P.InputWrapper>
                                    <P.Label>Country</P.Label>
                                    <P.StyledInput {...input} disabled={!isEditEnable} />
                                    {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
                                 </P.InputWrapper>
                              )}
                           />
                        </P.Col>
                     </P.UserDataWrapper>
                     {isEditEnable ? (
                        <P.Button type='submit'>Save</P.Button>
                     ) : (
                        <P.Button type='button' onClick={onEditClick}>Edit</P.Button>
                     )}
                  </form>
               )}
            />
         </P.PersonalDataWrapper>
      </AccountWrapper>
   )
}

export default PersonalData;
