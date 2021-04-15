import React from "react";
import styled from "styled-components";
import { GameCard } from '../../../components/GameCard/GameCard';
import witcher from "../../../assets/witcher.png";

const Container = styled.div`
    padding: 40px 48px;
    grid-area: catalogue;
    background-color: #161426;
`

const Header = styled.div`
    border-left: 6px solid #3F3FB7;
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

    return (
        <Container>
            <Header>
                Action
            </Header>

            <Items>
                <GameCard cover={witcher}/>
                <GameCard cover={witcher}/>
                <GameCard cover={witcher}/>
                <GameCard cover={witcher}/>
                <GameCard cover={witcher}/>
                <GameCard cover={witcher}/>
                <GameCard cover={witcher}/>
                <GameCard cover={witcher}/>
                <GameCard cover={witcher}/>
                <GameCard cover={witcher}/>
                <GameCard cover={witcher}/>
                <GameCard cover={witcher}/>
            </Items>

        </Container>
     )}