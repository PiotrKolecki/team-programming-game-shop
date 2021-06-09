import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getTokenSelector } from "../../../store/user/selectors";
import * as P from "./parts";

const links = [
  { text: "Cart", to: "/cart", protectedPath: false },
  { text: "Orders", to: "/orders", protectedPath: true },
  { text: "Personal data", to: "/profile", protectedPath: true },
];

const Navigation: React.FC = () => {
  const location = useLocation();
  const token = useSelector(getTokenSelector);

  return (
    <P.Navigation>
      <P.Title>My Account</P.Title>
      <P.LinksWrapper>
        {links
          .filter(({ protectedPath }) => token || !protectedPath)
          .map(({ text, to }) => (
            <P.NavLink key={to} isActive={location.pathname === to} to={to}>
              {text}
            </P.NavLink>
          ))}
      </P.LinksWrapper>
    </P.Navigation>
  );
};

export default Navigation;
