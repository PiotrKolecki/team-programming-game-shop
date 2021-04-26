import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { theme as appTheme } from "../../constants";

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

const Title =styled.div`
    grid-area: title;
    z-index:1;
    font-size: 16px;
    font-family: "Lao MN";
    font-weight: 600;
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
            <Title>{ title }</Title>
            <Price>{ `${price} $` }</Price>
            <Categories>{ categories.join(', ') }</Categories>
        </Details>
        <Fade/>
    </Container>    
}
