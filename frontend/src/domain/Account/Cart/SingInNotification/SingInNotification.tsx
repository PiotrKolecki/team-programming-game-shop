import React from 'react';
import * as P from './parts'

export const SingInNotification: React.FC = () => (
   <P.SingInNotificationWrapper>
      <P.Title>
         <P.StyledLink to='/singin'>Sing In</P.StyledLink>
         , to complete your cart.
      </P.Title>
      <P.Subtitle>
         Doesn't have an acconunt?
         <P.StyledLink to='/register'> Register now!</P.StyledLink>
         </P.Subtitle>
   </P.SingInNotificationWrapper>
);

export default SingInNotification;
