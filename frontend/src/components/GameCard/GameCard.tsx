import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { theme as appTheme } from "../../constants";
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cart/index';
import { Alert } from "../index";

const Container = styled("div")<{ image: string }>`
  height: 350px;
  width: 200px;
  position: relative;
  margin-right: 120px;
  margin-top: 60px;
`;

const LinkWrapper = styled.div`
width: 150px;
z-index: 1;
`;

const useStyles = makeStyles(() => ({
  image: {
    height: "350px",
    width: "250px",
    transition: "opacity 250ms",

    "&:hover": {
      opacity: "0.4",

      "& + button": {
        display: "block",
      },
    },
  },

  button: {
    position: "absolute",
    marginTop: " -200px",
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
    },
  },

  title: {
    zIndex: 1,
    fontSize: "16px",
    fontFamily: "Lao MN",
    fontWeight: 600,
    color: "white",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Fade = styled.div`

  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
  bottom: 0;
  width: 250px;
  height: 170px;
  position: absolute;
`;

const Details = styled.div`
  margin-top: -62px;
  padding-left: 15px;
  padding-right: 12px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: "title price" "category price";
`;

const Categories = styled.div`
  font-size: 12px;
  z-index: 1;
`;

const Price = styled.div`
  font-size: 12px;
  width: 57px;
  height: 19px;
  background-color: ${appTheme.colors.governorBay};
  text-align: center;
  padding-top: 5px;
  margin-right: 5px;
  z-index: 1;
  border-radius: 9px;

  grid-area: price;
  align-self: center;
`;

type CardProps = {
  id: number;
  title: string;
  category: string;
  price: number;
  cover: string;
};

export function GameCard({ id, title, category, price, cover }: CardProps) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [isAlertVisible, setAlertVisibility] = useState(false);
  const addToCart = () => {
    dispatch(addItem({ product_id: id, quantity: 1 }));
    setAlertVisibility(true);
  }


  return (
    <>
    {isAlertVisible ? 
      <Alert
         type="success"
         onClose={() => {
           setAlertVisibility(false);
         }}
         text="Item was successfully added to your cart!"
         
       />
     : null}
    <Container image={cover}>
      <img src={cover} alt="Avatar" className={classes.image} />
      <Button variant="contained" className={classes.button} onClick={addToCart}>
        Add to cart
      </Button>
      <Details>
        <LinkWrapper>
        <Link
          key={title}
          to={{
            pathname: `/insight/${category.toLowerCase()}/${id}`,
            state: {
              id,
              title,
              category,
              price,
              cover,
            },
          }}
          className={classes.title}
        >
          {title}
        </Link>
        </LinkWrapper>
        <Price>{`${price} $`}</Price>
        <Categories>{category}</Categories>
      </Details>
      <Fade />
    </Container>
    </>
  );
}
