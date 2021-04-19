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
