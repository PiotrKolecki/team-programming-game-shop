import React, { useState } from 'react';
import * as P from './parts'
import { CartStagesEnum } from '../constants';
import home from '../../../../assets/home.svg';
import pin from '../../../../assets/pin.svg';
import RecipientForm from './DeliveryForms/RecipientForm';
import HomeAddressForm from './DeliveryForms/HomeAddressForm';
import PickupPointForm from './DeliveryForms/PickupPoint';

interface DeliveryProps {
   setStage: (stage: CartStagesEnum) => void;
}

enum DeliveryOptions {
   homeAddress = 'HomeAddress',
   pickupPoint = 'PickupPoint',
}

export const Delivery: React.FC<DeliveryProps> = ({ setStage }) => {
   const [deliveryOption, setDeliveryOption] = useState<DeliveryOptions | undefined>(undefined);

   const onDeliveryClick = (option: DeliveryOptions) => () => {
      setDeliveryOption(option);
      setStage(CartStagesEnum.deliveryOption);
   }

   return (
      <P.DeliveryWrapper>
         <P.TitleWrapper>
            <P.Title>Choose delivery option</P.Title>
            {deliveryOption && (
               <P.Button
                  type="button"
                  onClick={() => setStage(CartStagesEnum.paymentMethod)}
               >
                  Next
               </P.Button>
            )}
         </P.TitleWrapper>
         <P.OptionsWrapper>
            <P.DeliveryOption
               type="button"
               isActive={deliveryOption === DeliveryOptions.homeAddress}
               onClick={onDeliveryClick(DeliveryOptions.homeAddress)}
            >
               <P.Image src={home} />
               <P.Text>Home address</P.Text>
            </P.DeliveryOption>
            <P.DeliveryOption
               type="button"
               isActive={deliveryOption === DeliveryOptions.pickupPoint}
               onClick={onDeliveryClick(DeliveryOptions.pickupPoint)}
            >
               <P.Image src={pin} />
               <P.Text>Pickup Point</P.Text>
            </P.DeliveryOption>
         </P.OptionsWrapper>
         {deliveryOption && (
            <P.FormWrapper>
               <RecipientForm />
               {deliveryOption === DeliveryOptions.homeAddress ? <HomeAddressForm /> : <PickupPointForm />}
            </P.FormWrapper>
         )}
      </P.DeliveryWrapper>
   );
};

export default Delivery;
