import React from 'react';
import * as P from './parts'
import { CartStagesEnum } from '../constants';
import checked from '../../../../assets/checked.svg';

interface BasketStagesBarProps {
   currentStage: CartStagesEnum;
}

const cartStages = [
   CartStagesEnum.singIn,
   CartStagesEnum.completeCart,
   CartStagesEnum.deliveryOption,
   CartStagesEnum.paymentMethod,
   CartStagesEnum.finished
];

export const BasketStagesBar: React.FC<BasketStagesBarProps> = ({ currentStage }) => {
   const currentStageIndex = cartStages.indexOf(currentStage);

   return (
      <P.BarWrapper>
         {cartStages.map((stage, index) => (
            <P.StageWrapper key={stage}>
               <P.Circle isPrevStage={index <= currentStageIndex}>
                  {index < currentStageIndex ? <P.Image src={checked} /> : index + 1}
               </P.Circle>
               <P.Text>{stage.split(/(?=[A-Z])/g).join(' ')}</P.Text>
               {index < cartStages.length - 1 && <P.Line />}
            </P.StageWrapper>
         ))}
      </P.BarWrapper>
   );
};

export default BasketStagesBar;
