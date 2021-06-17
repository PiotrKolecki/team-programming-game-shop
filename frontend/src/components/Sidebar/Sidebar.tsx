import React, { useState } from "react";
import styled from "styled-components";
import Slider from "@material-ui/core/Slider";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import classnames from "classnames";
import { useLocation } from "react-router";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { theme as appTheme } from "../../constants";

import { filtersSet } from '../../store/filtering/index';

type NavItem = {
  name: string;
  href: string;
};

const Container = styled.div`
  grid-area: sidebar;
  background-color: ${appTheme.colors.blackRock};
  height: 1000px;
  padding: 40px 32px;
`;

const Price = styled.div`
  font-family: "Lao Sangam MN",
  font-weight: 300;
  font-size: 1.1rem;
  color: ${appTheme.colors.mercury};

  padding-bottom: 10px;
  border-bottom: 1px solid ${appTheme.colors.silver};
  margin-bottom: 40px;

`;

const Categories = styled.div`
  font-family: "Lao Sangam MN",
  font-weight: 300;
  font-size: 1.1rem;
  color: ${appTheme.colors.mercury};

  padding-top: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${appTheme.colors.mercury};
  margin-bottom: 16px;
  `;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const useStyles = makeStyles(theme => ({
  inputs: {
    paddingTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
  },

  root: {
    border: `1px solid ${appTheme.colors.mercury}`,
  },

  input: {
    color: appTheme.colors.silver,
    border: `1px solid ${appTheme.colors.royalBlue}`,
    borderRadius: "4px",
    width: "60px",
    padding: "5px",
    textAlign: "center",
  },

  option: {
    color: "white",
    padding: "8px 6px",
    cursor: "pointer",
    fontFamily: "Lao Sangam MN",
    justifyContent: "left",
    textTransform: "capitalize",
    fontSize: "16px",

    "&:hover": {
      backgroundColor: appTheme.colors.governorBay,
      borderRadius: "6px",
    },
  },

  active: {
    backgroundColor: appTheme.colors.governorBay,
    borderRadius: "3px",
  },
}));

const categories: Array<NavItem> = [
  {
    name: "All",
    href: "/all",
  },
  {
    name: "Action",
    href: "/action",
  },
  {
    name: "Adventure",
    href: "/adventure",
  },
  {
    name: "Fantasy",
    href: "/fantasy",
  },
  {
    name: "Horror",
    href: "/horror",
  },
  {
    name: "Multiplayer",
    href: "/multiplayer",
  },
  {
    name: "Open World",
    href: "/openworld",
  },
  {
    name: "Racing",
    href: "/racing",
  },
  {
    name: "RPG",
    href: "/rpg",
  },
  {
    name: "RTS",
    href: "/rts",
  },
  {
    name: "Simulation",
    href: "/simulation",
  },
  {
    name: "Sport",
    href: "/sport",
  },
  {
    name: "Strategy",
    href: "/strategy",
  },
];

export function Sidebar() {
  const classes = useStyles();

  const [value, setValue] = useState<number[]>([0, 300]);
  const [category, setCategory] = useState<string>("All");
  const { pathname } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  
  const handleChange = (event: any, newValue?: number | number[]) => {
    setValue(newValue as number[]);
    dispatch(filtersSet({ prices: newValue as number[], category }));
  };

  const onCategoryClick = (categoryHref: string, categoryName: string) => {
    history.push(`/insight${categoryHref}`);
    setCategory(categoryName);
    dispatch(filtersSet({ prices: value, category: categoryName }));

  };

  const handlePrice = (isMin: boolean) => (event: any) => {
    const minPrice = value[0];
    const maxPrice = value[1];

    const newPrice = isMin
      ? [Number(event.target.value), maxPrice]
      : [minPrice, Number(event.target.value)];
    setValue(newPrice);
  };

  return (
    <Container>
      <Price>PRICE</Price>
      <Slider
        value={value}
        max={300}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
      />
      <div className={classes.inputs}>
        <OutlinedInput
          value={value[0]}
          classes={{
            root: classes.root,
            input: classes.input,
          }}
          onChange={handlePrice(true)}
          inputProps={{
            "aria-label": "weight",
          }}
        />
        -
        <OutlinedInput
          value={value[1]}
          classes={{
            root: classes.root,
            input: classes.input,
          }}
          onChange={handlePrice(false)}
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </div>

      <Categories>CATEGORIES</Categories>
      <List>
        {categories.map(category => (
          <Button
            key={category.name}
            onClick={() => onCategoryClick(category.href, category.name)}
            className={classnames(
              classes.option,
              pathname.startsWith(`/insight${category.href}`) && classes.active
            )}
          >
            {category.name}
          </Button>
        ))}
      </List>
    </Container>
  );
}
