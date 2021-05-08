import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { theme as appTheme } from "../../constants";
import gta from "../../assets/gta.png";

const Container = styled("div")<{image: string}>`
    height: 350px;
    width: 240px;
    position: relative; 
    `

const useStyles = makeStyles(() => ({
 image: {
    height: "370px",
    width: "280px",
    transition: "opacity 250ms",

    "&:hover": {
        opacity: "0.4",  

        "& + button": {
            display: "block"     
        }
    }
 },

 button: {
    position: "absolute",
    marginTop:" -200px",
    left: "90px",
    textAlign: "center",
    borderRadius: "14px",
    backgroundColor: appTheme.colors.indigo,
    color: "white",
    textTransform: "lowercase",
    fontFamily: "Lao Sangam MN",
    display: "none",    
     zIndex: 10,

    "&:hover": {
        cursor: "pointer",
        display: "block",    
        backgroundColor: appTheme.colors.governorBay,
    }
 },

 title: {
    gridArea: "title",
    zIndex: 1,
    fontSize: "16px",
    fontFamily: "Lao MN",
    fontWeight: 600,
    color: "white",
    textDecoration: "none",

    "&:hover": {
    textDecoration: "underline",

    }
 }
}));


const Fade = styled.div`
    background: transparent linear-gradient(180deg, black 0%, black 60%) 0% 0% no-repeat padding-box;
    bottom: 23px;
    left: 38px;
    width: 200px;
    height: 60px;
    position: absolute;

`;

const Details = styled.div`
    margin-top: -105px;
    margin-left: 40px;
    padding-left: 15px;
    padding-right: 12px;

    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "title price" "category price"
`

const Categories = styled.div`
    font-size: 12px;
    z-index:1;
`

const Price = styled.div`
    font-size: 12px;
    width: 57px;
    height: 19px;
    background-color: ${appTheme.colors.governorBay};
    text-align: center;
    padding-top: 5px;
    margin-right: 5px;
    z-index:1;
    border-radius: 9px;

    grid-area: price;
    align-self: center;
`

type CardProps = {
    title: string
    categories: Array<string>
    price: number,
    cover: string;
  };

export function GameCard({ title, categories, price, cover }: CardProps) {
    const classes = useStyles();

    return <Container image={cover}>
         <img src={cover} alt="Avatar" className={classes.image}/>
         <Button variant="contained"  className={classes.button}>
            Add to cart
        </Button>
        <Details>
        <Link key={title} to={
            {pathname: "/insight/adventure/1",
                state: { 
                    title, 
                    categories, 
                    price, 
                    cover: gta
                }
              }
            } 
              className={classes.title}>
          {title}
        </Link>
            <Price>{ `${price} $` }</Price>
            <Categories>{ categories.join(', ') }</Categories>
        </Details>
        <Fade/>
    </Container>    
}
