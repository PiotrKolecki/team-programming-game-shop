import React from 'react';
import * as P from './parts';

interface AdditionalCostsProps {
   label: string;
   value: string;
}

const AdditionalCosts: React.FC<AdditionalCostsProps> = ({ label, value }) => (
   <P.AdditionalCosts>
      <P.ProductImage />
      <P.ProductName />
      <P.ProductInfo>{label}: </P.ProductInfo>
      <P.ProductInfo>$ {value}</P.ProductInfo>
   </P.AdditionalCosts>
)


export default AdditionalCosts;
