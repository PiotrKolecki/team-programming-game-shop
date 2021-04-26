import React from "react";
import styled from "styled-components";
import { GameCard } from '../../../components/GameCard/GameCard';
import witcher from "../../../assets/witcher.png";
import { theme as appTheme } from "../../../constants";

const Container = styled.div`
    padding: 40px 48px;
    grid-area: catalogue;
    background-color: ${appTheme.colors.blackRock};
`

const Header = styled.div`
    border-left: 6px solid ${appTheme.colors.governorBay};
    padding-left: 16px;
    padding-top: 6px;
    font-size: 18px;
    height: 27px;

    font-family: "Rubik";
    font-weight: 500;
    text-transform: uppercase;

`

const Items = styled.div`
    padding-top: 24px;

    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between;
`

  export function Catalogue() {
    const item = { title: 'The Wither', categories: ['Action', 'Adventure'], price: 19.99, cover: witcher} ;
    const items = [item, item, item, item, item, item, item, item, item, item];

    return (
        <Container>
            <Header>
                Action
            </Header>

            <Items>
                { items.map(({ title, categories, price, cover }) => <GameCard title={title} categories={categories} price={price} cover={cover}/>)}
                
            </Items>

        </Container>
     )}