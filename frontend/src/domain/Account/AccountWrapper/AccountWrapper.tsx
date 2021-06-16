import React from "react";
import MainWrapper from "../../../components/MainWrapper/MainWrapper";
import Navigation from "../Navigation/Navigation";
import * as P from "./parts";
import User from "../../../assets/user.svg";
import { useSelector } from "react-redux";
import { getUserMailSelector } from "../../../store/user/selectors";

interface AccountWrapperProps {
  children: React.ReactNode;
  breadcrumbs: string[];
  pageTitle: string;
  shouldDisplayRecommended?: boolean;
}

const AccountWrapper: React.FC<AccountWrapperProps> = ({
  children,
  breadcrumbs,
  pageTitle,
  shouldDisplayRecommended = true,
}) => {
  const userMail = useSelector(getUserMailSelector);

  return (
    <MainWrapper
      pageTitle={pageTitle}
      breadcrumbs={breadcrumbs}
      aside={<Navigation />}
      subContent={shouldDisplayRecommended && "Some games"}
    >
      <P.TopSection>
        <P.EmailWrapper>
          <P.ImageWrapper>
            <P.Image src={User} />
          </P.ImageWrapper>
          <P.Email>{userMail ?? "Hello Stranger!"}</P.Email>
        </P.EmailWrapper>
      </P.TopSection>
      {children}
    </MainWrapper>
  );
};

export default AccountWrapper;
