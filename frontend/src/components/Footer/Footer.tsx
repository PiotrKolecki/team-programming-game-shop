import React from 'react';
import { Logo } from '../Logo/Logo';
import * as P from './parts';

const Footer: React.FC = () => (
   <P.FooterWrapper>
      <P.Copyright>
         © 2021 Valve Corporation. All rights reserved. All trademarks
         are property of their respective owners in the US and other
         countries. VAT included in all prices where applicable.
      </P.Copyright>
      <P.ContactSection>
         <P.Text>Contact us</P.Text>
         <P.Email href="mailto:contact@agh.edu.pl">contact@agh.edu.pl</P.Email>
         <P.Address>ul. Reymonta 19, 30-059 Kraków</P.Address>
      </P.ContactSection>
      <Logo />
   </P.FooterWrapper>
);

export default Footer;
