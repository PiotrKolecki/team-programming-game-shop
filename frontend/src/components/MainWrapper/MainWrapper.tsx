import React from 'react';
import * as P from './parts'

interface MainWrapperProps {
   breadcrumbs: string[];
   pageTitle: string;
   children: React.ReactNode;
   aside?: React.ReactNode;
   subContent?: React.ReactNode;
   className?: string;
}

export const MainWrapper: React.FC<MainWrapperProps> = ({
   breadcrumbs,
   pageTitle,
   children,
   aside,
   subContent,
   className,
}) => (
   <P.MainWrapper className={className}>
      <P.PageTitle>
         <P.Breadcrumbs>{breadcrumbs.join(' / ')}</P.Breadcrumbs>
         <P.Title>{pageTitle}</P.Title>
      </P.PageTitle>
      <P.MainContent>
      {aside && <P.AsideCol>{aside}</P.AsideCol>}
      <P.Section>
         <P.Content>{children}</P.Content>
         {subContent && <P.Recommended>{subContent}</P.Recommended>}
      </P.Section>
      </P.MainContent>
   </P.MainWrapper>
)

export default MainWrapper;
