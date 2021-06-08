import {
  normalizeToNumber,
  normalizeToZipCode,
} from "../../../../../utils/formParsers";
import {
  basicValidation,
  emailVlidation,
  fieldRequired,
} from "../../../../../utils/validators";
import { OrderFormIDs } from "../../constants";
export interface FieldData {
  name: string;
  label: string;
  validate?: (value: string) => void;
  inputType?: string;
  parse?: (value: string) => string;
}

export const recipientDataFields: FieldData[] = [
  {
    name: OrderFormIDs.FIRST_NAME,
    label: "First name",
    validate: basicValidation,
  },
  {
    name: OrderFormIDs.LAST_NAME,
    label: "Last name",
    validate: basicValidation,
  },
  {
    name: OrderFormIDs.EMAIL,
    label: "Email",
    validate: emailVlidation,
  },
  {
    name: OrderFormIDs.PHONE,
    label: "Phone number",
    validate: basicValidation,
    parse: (value) => (value ? normalizeToNumber(value) : value),
  },
];

export const addressDatafield: FieldData[] = [
  {
    name: OrderFormIDs.STREET,
    label: "Street",
    validate: basicValidation,
  },
  {
    name: OrderFormIDs.BUILDING_NUMBER,
    label: "Building number",
    validate: fieldRequired,
    parse: (value) => (value ? normalizeToNumber(value) : value),
  },
  {
    name: OrderFormIDs.APARTMENT_NUMBER,
    label: "Apartment number",
    parse: (value) => (value ? normalizeToNumber(value) : value),
  },
  {
    name: OrderFormIDs.ZIP_CODE,
    label: "Zip code",
    validate: basicValidation,
    parse: (value) => (value ? normalizeToZipCode(value) : value),
  },
  {
    name: OrderFormIDs.CITY,
    label: "City",
    validate: basicValidation,
  },
  {
    name: OrderFormIDs.COUNTRY,
    label: "Country",
    validate: basicValidation,
  },
];
