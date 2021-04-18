import React, { useState } from "react";
import styled from "styled-components";
import Slider from '@material-ui/core/Slider';
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import classnames from "classnames";
import { useLocation } from "react-router";
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom';

type NavItem = {
  name: string;
  href: string;
};

const Container = styled.div`
  grid-area: sidebar;
  background-color: #060323;
  height: 1000px;
  padding: 40px 32px;
`

const Price = styled.div`
  font-family: "Lao Sangam MN",
  font-weight: 300;
  font-size: 1.1rem;
  color: #E6E6E6;

  padding-bottom: 10px;
  border-bottom: 1px solid #c9c9c9;
  margin-bottom: 40px;

`

const Categories = styled.div`
  font-family: "Lao Sangam MN",
  font-weight: 300;
  font-size: 1.1rem;
  color: #E6E6E6;

  padding-top: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid #c9c9c9;
  margin-bottom: 16px;
  `

  const List = styled.div`
    display: flex;
    flex-direction: column;
  `



const useStyles = makeStyles((theme) => ({
  inputs: {
    paddingTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
  },

   root: {
    border: "1px solid #5454ED",
   },

  input: {
    color: "#c9c9c9",
    border: "1px solid #5454ED",
    borderRadius: "4px",
    width: "60px",
    padding: "5px",
    textAlign: "center",

  },

  option: {
    color:'white',
    padding: "8px 6px",
    cursor: "pointer",
    fontFamily: "Lao Sangam MN",
    justifyContent: 'left',
    textTransform: "capitalize",
    fontSize: "16px",

    "&:hover": {
      backgroundColor: "#3F3FB7",
      borderRadius: "3px",
    }
  },

  active: {
    backgroundColor: "#3F3FB7",
      borderRadius: "3px",
  },
}));

const categories: Array<NavItem> = [
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

    const [value, setValue] = useState<number>(100);
    const { pathname } = useLocation();
    const history = useHistory();

    console.log(pathname);

    const handleChange = (event: any, newValue?: number | number[]) => {
      if(!newValue){
        console.log(event.target.value);
          setValue(event.target.value);
        return;
      }

      setValue(newValue as number);
    };

    const onCategoryClick = (category: string) => {
      history.push(`/insight${category}`)
    }
  

    return (
        <Container>
        <Price>PRICE</Price>
        <Slider defaultValue={100} max={300} onChange={handleChange} aria-labelledby="continuous-slider" />
        <div className={classes.inputs}>
        <OutlinedInput
            value={0}
            classes={{
              input: classes.input,
            }}
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          -
          <OutlinedInput
                value={value}
                classes={{
                  root: classes.root,
                  input: classes.input,
                }}
                onChange={(event) => handleChange(event)}
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              </div>

              <Categories>CATEGORIES</Categories>
              <List>
                  {categories.map(category => <Button key={category.name} onClick={() => onCategoryClick(category.href)} className={classnames(
                    classes.option,
                    pathname === `/insight${category.href}` && classes.active
                  )}>
                    {category.name}
                  </Button>
                  
                  )}
              </List>
        </Container>
    )
}