export enum CartStagesEnum {
  singIn = "SingIn",
  completeCart = "CompleteCart",
  deliveryOption = "DeliveryOption",
  paymentMethod = "PaymentMethod",
  finished = "Finished",
}

export enum OrderFormIDs {
  FIRST_NAME = "delivery.firstName",
  LAST_NAME = "delivery.lastName",
  EMAIL = "delivery.email",
  PHONE = "delivery.phone",
  STREET = "delivery.address.street",
  BUILDING_NUMBER = "delivery.address.buildingNumber",
  APARTMENT_NUMBER = "delivery.address.apartmentNumber",
  ZIP_CODE = "delivery.address.zip-code",
  CITY = "delivery.address.city",
  COUNTRY = "delivery.address.country",
  PACZKOMAT = "delivery.address.paczkomat",
}

export enum DeliveryOptions {
  homeAddress = "HomeAddress",
  pickupPoint = "PickupPoint",
}

export const pickupAddress = {
  street: "Ul. Reymonta",
  buildingNumber: "17",
  "zip-code": "35-543",
  city: "Kraków",
  country: "Polska",
};

export type PickupAddress = Record<keyof typeof pickupAddress, string>;

export const DELIVERY_FEE = 2.99;
export const PAYMENT_FEE = 0.99;
