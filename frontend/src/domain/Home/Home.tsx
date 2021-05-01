import React from "react";
import styled from "styled-components";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Catalogue } from './Catalogue/Catalogue';


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
`;

const Content = styled.div`
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
    color: "#e6e4e4",
    textDecoration: "none",
    
    "&:hover": {
    color: "white",
    textDecoration: "underline"
    }
  }  

}));

export function Home() {
  const classes = useStyles();

  const handleClick = () =>{

  }

  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb" classes={{ ol: classes.breadcrumbs }}>
        <Link to="/" onClick={handleClick} className={classes.element}>
          Home
        </Link>
        <Link
          to="/insight"
          onClick={handleClick}
          aria-current="page"
          className={classes.element}
          >
          Store
        </Link>
      </Breadcrumbs>
      <NavHeader>STORE</NavHeader>
      <Content>
        <Sidebar/>
        <Catalogue/>
      </Content>
    </Container>
  )
}
