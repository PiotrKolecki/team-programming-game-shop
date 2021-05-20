export const normalizeToNumber = (value: string) => {
   if (!value) {
      return value;
   }

   return value.replace(/[^\d]/g, "");
};

export const normalizeToZipCode = (value: string) => {
   if (!value) {
      return value;
   }

   return value.replace(/[^\d|-]/g, "");
};
