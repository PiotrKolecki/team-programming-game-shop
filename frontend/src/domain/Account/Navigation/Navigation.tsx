import React from 'react';
import { useLocation } from 'react-router-dom';
import * as P from './parts';

const links = [
   { text: 'Cart', to: '/cart' },
   { text: 'Orders', to: '/orders' },
   { text: 'Personal data', to: '/profile' },
];

const Navigation: React.FC = () => {
   const location = useLocation();

   return (
      <P.Navigation>
         <P.Title>My Account</P.Title>
         <P.LinksWrapper>
            {links.map(({ text, to }) => (
               <P.NavLink key={to} isActive={location.pathname === to} to={to}>{text}</P.NavLink>
            ))}
         </P.LinksWrapper>
      </P.Navigation>
   );
};

export default Navigation;
