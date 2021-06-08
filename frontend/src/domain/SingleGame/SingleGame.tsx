import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { theme as appTheme } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";
import { GameCard } from "../../components/GameCard/GameCard";
import witcher from "../../assets/witcher.png";
import { Home } from "../index";
import { useLocation } from "react-router-dom";

const GameContainer = styled.div`
  padding: 40px 90px 40px 48px;
  grid-area: catalogue;
  background-color: ${appTheme.colors.mirage};

  display: grid;
  grid-template-rows: 0.05fr 0.5fr max-content 0.2fr 0.2fr max-content;
  grid-template-columns: 3fr 3fr;
  grid-template-areas:
    "header header"
    "cover price"
    "cover description"
    "cover categories"
    "cover buttons"
    "recommended recommended";
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

const Recommended = styled.div`
  margin-top: 8rem;
  grid-area: recommended;
`;

const RecommendedCaption = styled.span`
  border-left: 6px solid ${appTheme.colors.governorBay};
  padding-left: 16px;
  font-family: "Rubik";
  font-size: 20px;
  font-weight: 500;
`;

const RecommendedItems = styled.div`
  padding-top: 24px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
    width: "650px",
    alignSelf: "start",
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
  title: string;
  manufactory: string;
  price: number;
  cover: string;
};

export function SingleGame() {
  const classes = useStyles();
  const location = useLocation<SingleGameProps>();
  const { title, manufactory, cover, price }: SingleGameProps = location.state;

  // INFO: description will be obtained from redux store not from props, so mock it for now in that way
  const description =
    "The Grand Theft Auto series is split into separate fictional universes, named after the primary level of graphics capability used in each era. The original Grand Theft Auto, its expansions and its sequel are considered the '2D universe'. Grand Theft Auto III and its sequels are considered the '3D universe'.  Grand Theft Auto IV, its expansions and Grand Theft Auto V are considered the 'HD universe'. Each universe is considered separate with only brands, place names and background characters shared between them.";

  const breadcrumbs = [
    { to: "/", label: "Home" },
    { to: "/insight/adventure", label: "Adventure" },
    { to: "/insight/adventure/1", label: "Grand Theft Auto" },
  ];
  const categories = ["Action", "Adventure", "Multiplayer"];

  const item = {
    title: "The Witcher",
    categories: ["Action", "Adventure"],
    price: 19.99,
    cover: witcher,
  };
  const items = [item, item, item, item, item];

  const addToCart = () => {
    dispatch(addItem({ product_id: 1, quantity: 1 }));
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
        <Description>{description}</Description>
        <Categories>
          {categories.map(category => (
            <Category> {category} </Category>
          ))}
        </Categories>
        <Buttons>
          <Button className={classes.buyButton}>Buy now</Button>
          <Button className={classes.addButton} onClick={addToCart}>Add to cart</Button>
        </Buttons>
        <Recommended>
          <RecommendedCaption>POPULAR</RecommendedCaption>
          <RecommendedItems>
            {items.map(({ title, categories, price, cover }, index) => (
              <GameCard
                key={index}
                title={title}
                categories={categories}
                price={price}
                cover={cover}
              />
            ))}
          </RecommendedItems>
        </Recommended>
      </GameContainer>
    </Home>
  );
}
