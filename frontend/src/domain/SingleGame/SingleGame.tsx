import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { theme as appTheme } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from 'react-redux';
import { Home } from "../index";
import { AppState } from "../../store/rootReducer";
import { useLocation } from "react-router-dom";
import { addItem } from '../../store/cart/index';
import { useHistory } from "react-router";
import { getGameById } from '../../store/catalogue/selectors';

const GameContainer = styled.div`
  padding: 40px 90px 40px 48px;
  grid-area: catalogue;
  background-color: ${appTheme.colors.mirage};

  display: grid;
  grid-template-rows: 0.05fr 0.1fr max-content 0.05fr 0.1fr;
  grid-template-columns: 3fr 3fr;
  grid-template-areas:
    "header header"
    "cover price"
    "cover description"
    "cover categories"
    "cover buttons";
  grid-column-gap: 25px;
  grid-row-gap: 25px;
`;

const Header = styled.div`
    grid-area: header;
    display: flex
    flex-direction: row;
    padding-top: 6px;
    height: 27px;

    text-transform: uppercase;
`;

const Title = styled.span`
  border-left: 6px solid ${appTheme.colors.governorBay};
  padding-left: 16px;
  font-family: "Rubik";
  font-size: 23px;
  font-weight: 500;
`;

const Manufactory = styled.span`
  font-family: "Lao Sangam MN";
  font-weight: 400;
  padding-left: 16px;
  font-size: 20px;
`;

const Price = styled.div`
  font-size: 15px;
  width: 85px;
  height: 24px;
  background-color: ${appTheme.colors.governorBay};
  text-align: center;
  padding-top: 7px;
  margin-right: 5px;
  margin-top: 40px;
  z-index: 1;
  border-radius: 13px;

  grid-area: price;
  align-self: center;
`;

const Description = styled.div`
  grid-area: description;
  font-size: 16px;
  font-family: Lao Sangam MN;
  font-weight: 100;
`;

const Categories = styled.div`
  grid-area: categories;

  display: flex;
`;

const Category = styled.div`
  font-size: 13px;
  height: 22px;
  background-color: ${appTheme.colors.steelGray};
  text-align: center;
  padding-top: 6px;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 15px;
  margin-top: 10px;
  z-index: 1;
  border-radius: 12px;

  align-self: center;
`;

const Buttons = styled.div`
  grid-area: buttons;
`;


const useStyles = makeStyles(theme => ({
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
      textDecoration: "underline",
    },
  },

  cover: {
    gridArea: "cover",
    width: "400px",
    height: "550px",
    alignSelf: "start",
    justifySelf: "center",
    paddingTop: "20px"
  },

  buyButton: {
    backgroundColor: appTheme.colors.studio,
    color: "white",
    borderRadius: 0,
    fontFamily: "Lao Sangam MN",
    fontSize: "15px",
    textTransform: "none",
    padding: theme.spacing(0.7, 2.5),
    marginRight: theme.spacing(3),

    "&:hover": {
      backgroundColor: appTheme.colors.fuchsiaBlue,
    },
  },

  addButton: {
    backgroundColor: "rgba(255, 252, 252, 0.1)",
    border: `1px solid ${appTheme.colors.ivory}`,
    color: appTheme.colors.ivory,
    borderRadius: 0,
    fontFamily: "Lao Sangam MN",
    fontSize: "15px",
    textTransform: "none",
    padding: theme.spacing(0.7, 2.5),
    boxSizing: "border-box",
  },
}));

type SingleGameProps = {
  id: number;
  title: string;
  manufactory: string;
  price: number;
  cover: string;
  category: string;
  isLoggedIn: boolean;
};

export function SingleGame() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation<SingleGameProps>();
  const { id, title, manufactory, cover, price, category, isLoggedIn }: SingleGameProps = location.state;

  const breadcrumbs = [
    { to: "/", label: "Home" },
    { to: `/insight/${category}`, label: category },
    { to: `/insight/${category}/${id}`, label: title },
  ];
  const game = useSelector((state: AppState) => getGameById(state, id));
  const addToCart = () => {
    dispatch(addItem({ product_id: id, quantity: 1 }));
  }
  const buyNow = () => {
    dispatch(addItem({ product_id: id, quantity: 1 }));
    history.push('/cart');
  }

  return (
    <Home breadcrumbs={breadcrumbs}>
      <GameContainer>
        <Header>
          <Title>{title}</Title>
          <Manufactory>{manufactory}</Manufactory>
        </Header>
        <img src={cover} alt="Avatar" className={classes.cover} />
        <Price>{`${price} $`}</Price>
        <Description>{game?.description || ""}</Description>
        <Categories>
          <Category>
            {category}
          </Category>
        </Categories>
        {isLoggedIn ? 
        <Buttons>
          <Button className={classes.buyButton} onClick={buyNow}>Buy now</Button>
          <Button className={classes.addButton} onClick={addToCart}>Add to cart</Button>
        </Buttons>: null}
      </GameContainer>
    </Home>
  );
}
