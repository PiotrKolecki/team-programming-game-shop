import { normalizeToNumber, normalizeToZipCode } from '../../../../../utils/formParsers';
import { basicValidation, emailVlidation, fieldRequired } from '../../../../../utils/validators';

export interface FieldData {
   name: string;
   label: string;
   validate?: (value: string) => void;
   inputType?: string;
   parse?: (value: string) => string;
}

export const recipientDataFields: FieldData[] = [
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
      name: 'email',
      label: 'Email',
      validate: emailVlidation,
   },
   {
      name: 'phone',
      label: 'Phone number',
      validate: basicValidation,
      parse: (value) => value ? normalizeToNumber(value) : value,
   },
];

export const addressDatafield: FieldData[] = [
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
