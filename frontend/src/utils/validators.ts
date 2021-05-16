/* eslint-disable no-useless-escape */

export const fieldRequired = (value: string) => value ? undefined : 'Field required';

export const basicValidation = (value: string) => {
   let msg = fieldRequired(value);

   if (msg) {
      return msg;
   } else if (value.length < 2) {
      return 'The minimum number of characters is 2'
   } else if (value.length > 250) {
      return 'The maximum number of characters is 250'
   }
}

const validateEmail = (value: string) => {
   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
   if(!re.test(value)) {
      return 'Invalid email address'
   }
 }

export const emailVlidation = (value: string) => {
   let msg = fieldRequired(value);

   if (msg) {
      return msg;
   } 

   msg = validateEmail(value);

   if (msg) {
      return msg;
   } 
   
   if (value.length < 2) {
      return 'The minimum number of characters is 2'
   } else if (value.length > 250) {
      return 'The maximum number of characters is 250'
   }
}
