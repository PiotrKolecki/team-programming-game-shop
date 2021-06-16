import React, { useState } from "react";
import styled from "styled-components";
import { theme as appTheme } from "../../constants";
import { useDispatch } from "react-redux";
import { Home } from "../Home/Home";
import { makeStyles } from '@material-ui/core/styles';
import { Input } from "../../components/Input";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextareaAutosize } from '@material-ui/core';
import { colors } from '../../constants/theme';
import Button from "@material-ui/core/Button";
import { addGame } from "../../store/admin/index";

const Container = styled.div`
  padding: 40px 48px;
  grid-area: catalogue;
  background-color: ${appTheme.colors.mirage};
  position: relative
`;

const Header = styled.div`
  border-left: 6px solid ${appTheme.colors.governorBay};
  padding-left: 16px;
  padding-top: 6px;
  font-size: 18px;
  height: 27px;

  font-family: "Rubik";
  font-weight: 500;
  text-transform: uppercase;
`;

const Items = styled.div`
  padding-top: 24px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;



const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        index: 100,
        marginRight: "50px",
      },
    inputInput: {
      padding: theme.spacing(1, 1),
      marginRight: "50px",
      background: appTheme.colors.inputBackground,
      width: "100%",
      height: "37px",
      borderRadius: "5px",
      border: `1px solid ${colors.governorBay}`,
      color: "white" ,
      
    },
    inputTextfield: {
        width: "100%",
      height: "37px",

        border: "1px solid transparent",
      padding: theme.spacing(1, 1),
      background: appTheme.colors.inputBackground,
    },
    root:{
        backgroundColor: "rgba(255,255,255,0.2)",
        color: "white",
        width: "160px",
      borderRadius: "5px",
      border: `1px solid ${colors.governorBay}`,

    },
    textArea: {
        backgroundColor: "rgba(255,255,255,0.2)",
        paddingTop: "20px",
        marginTop: "30px",
      minWidth: "400px",
      borderRadius: "5px",
        border: `1px solid ${colors.governorBay}`,
        fontFamily: "Rubik",
        fontSize: "15px"
    },

    button: {
        marginTop: "27px",
        marginLeft: "50px",
        textAlign: "center",
        borderRadius: "5px",
        backgroundColor: appTheme.colors.indigo,
        color: "white",
        fontFamily: "Lao Sangam MN",
        textTransform: "capitalize",
        zIndex: 10,
        height: '35px',
    
        "&:hover": {
          cursor: "pointer",
          display: "block",
          backgroundColor: appTheme.colors.governorBay,
        },
      },
  }));


export function AdminPanel() {

  const breadcrumbs = [
    { to: "/", label: "Home" },
    { to: "/insight/action", label: "Store" },
  ];

  const [title, setTitle] = useState<string>('');
  const [publisher, setPublisher] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState<string>('');

  const dispatch = useDispatch();
  const classes = useStyles();
  const categories = ["Action", "Adventure", "Fantasy", "Horror", "Multiplayer", "Open World",
        "Racing", "RPG", "RTS", "Simulation", "Sport", "Strategy"]

  const addNewGame = () => {
    dispatch(addGame({title, publisher, price, quantity, category, description}));
  }

  return (
    <Home breadcrumbs={breadcrumbs}>
      <Container>
        <Header>ADMIN PANEL</Header>

         <Items>
            <Input
                placeholder="Game title"
                classes={{
                input: classes.inputInput,
                }}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input
                placeholder="Publisher"
                classes={{
                input: classes.inputInput,
                }}
                onChange={(event) => setPublisher(event.target.value)}
            />
               
            <Input
                placeholder="Price"
                classes={{
                input: classes.inputInput,
                }}
                onChange={(event) => setPrice(Number(event.target.value))}
            />
            <Input
                placeholder="Quantity"
                classes={{
                input: classes.inputInput,
                }}
                onChange={(event) => setQuantity(Number(event.target.value))}
            />
             <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                <Select

                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                classes={{
                    root: classes.root
                }}
                value={category}
                onChange={(event) => setCategory(String(event.target.value))}
                >
            
                {categories.map(category => <MenuItem value={category}>{category}</MenuItem>)}

                </Select>
            </FormControl>
           
        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Description" className={classes.textArea}  onChange={(event) => setDescription(String(event.target.value))} />
        <Button variant="contained" className={classes.button} onClick={addNewGame}>
            Add
        </Button>
        </Items> 
        
      </Container>
    </Home>
  );
}
