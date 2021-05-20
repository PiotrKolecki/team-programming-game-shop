import React, { useState } from 'react';
import * as P from './parts'
import AccountWrapper from '../AccountWrapper/AccountWrapper';
import { Field, Form } from 'react-final-form';
import { normalizeToNumber, normalizeToZipCode } from '../../../utils/formParsers';
import { fieldRequired, basicValidation } from '../../../utils/validators';

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

interface PersonalDataField {
   name: keyof typeof mockData;
   label: string;
   validate?: (value: string) => void;
   inputType?: string;
   parse?: (value: string) => string;
}

const personalDataFields: PersonalDataField[] = [
   {
      name: 'name',
      label: 'First name',
      validate: basicValidation,
   },
   {
      name: 'surname',
      label: 'Last name',
      validate: basicValidation,
   },
   {
      name: 'phone',
      label: 'Phone number',
      validate: basicValidation,
      parse: (value) => value ? normalizeToNumber(value) : value,
   },
   {
      name: 'birthDate',
      label: 'Date of birth',
      inputType: 'date',
      validate: fieldRequired,
   },
];

const addressDatafield: PersonalDataField[] = [
   {
      name: 'street',
      label: 'Street',
      validate: basicValidation,
   },
   {
      name: 'houseNumber',
      label: 'House number',
      validate: fieldRequired,
      parse: (value) => value ? normalizeToNumber(value) : value,
   },
   {
      name: 'apartment',
      label: 'Apartment number',
      parse: (value) => value ? normalizeToNumber(value) : value,
   },
   {
      name: 'code',
      label: 'Zip code',
      validate: basicValidation,
      parse: (value) => value ? normalizeToZipCode(value) : value,
   },
   {
      name: 'city',
      label: 'City',
      validate: basicValidation,
   },
   {
      name: 'country',
      label: 'Country',
      validate: basicValidation,
   },
];

export const PersonalData: React.FC = () => {
   const [isEditEnable, setIsEditEnable] = useState(false);

   const onSubmit = (values: Record<string, string>) => {
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
                           {personalDataFields.map(({ name, label, inputType, validate, parse }) => (
                              <Field
                                 name={name}
                                 initialValue={mockData[name]}
                                 parse={parse}
                                 validate={validate}
                                 render={({ input, meta }) => (
                                    <P.InputWrapper>
                                       <P.Label>{label}</P.Label>
                                       <P.StyledInput {...input} type={inputType} disabled={!isEditEnable} />
                                       {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
                                    </P.InputWrapper>
                                 )}
                              />
                           ))}
                        </P.Col>
                        <P.Col>
                           {addressDatafield.map(({ name, label, inputType, validate, parse }) => (
                              <Field
                                 name={name}
                                 initialValue={mockData[name]}
                                 parse={parse}
                                 validate={validate}
                                 render={({ input, meta }) => (
                                    <P.InputWrapper>
                                       <P.Label>{label}</P.Label>
                                       <P.StyledInput {...input} type={inputType} disabled={!isEditEnable} />
                                       {meta.touched && meta.error && <P.ValidationError>{meta.error}</P.ValidationError>}
                                    </P.InputWrapper>
                                 )}
                              />
                           ))}
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
