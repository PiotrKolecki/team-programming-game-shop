import React from "react";
import styled from "styled-components";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { theme as appTheme } from "../../constants";

const Container = styled.div`
  display: grid;
  grid-template-rows: 40px 50px auto;
  grid-template-areas: "breadcrumbs" "navHeader" "content";
  margin-top: 50px;
`;

const NavHeader =  styled.div`
  grid-area: navHeader;
  font-family: "Rubik";
  padding-left: 24px;
  font-size: 2rem;
  font-weight: 450;
  text-transform: uppercase;
`;

const Content = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-areas: "sidebar catalogue"

`

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    gridArea: "breadcrumbs",
    color: "white",
    textDecoration: "none",
    paddingLeft: theme.spacing(3),
    fontSize: "1.2rem",
    fontFamily: "Lao Sangam MN",
  },

  element: {
    color: appTheme.colors.mercury,
    textDecoration: "none",
    
    "&:hover": {
    color: "white",
    textDecoration: "underline"
    }
  }  

}));

interface BreadcrumbsInterFace {
  to: string,
  label: string
}
interface HomeProps {
  breadcrumbs: BreadcrumbsInterFace[];
  children: React.ReactNode
}

export function Home({ breadcrumbs, children }: HomeProps) {
  const classes = useStyles();

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" classes={{ ol: classes.breadcrumbs }}>
      {breadcrumbs.map(({ to, label }) =>  <Link key={label} to={to} className={classes.element}>
          {label}
        </Link>)}
      </Breadcrumbs>
      <NavHeader>{breadcrumbs[breadcrumbs.length-1].label}</NavHeader>
      <Content>
        <Sidebar/>
        { children }
      </Content>
    </Container>
  )
}

