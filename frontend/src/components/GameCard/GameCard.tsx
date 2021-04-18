import React from "react";
import styled from "styled-components";

const Container = styled("div")<{image: string}>`
    background-image: url(${props => props.image});
    background-size: cover;
    height: 350px;
    width: 250px;
    position: relative;

`

const Fade = styled.div`
    background: transparent linear-gradient(180deg, #00000000 0%, #000000 60%) 0% 0% no-repeat padding-box;
    bottom: 37px;
    left: 38px;
    width: 190px;
    height: 60px;
    position: absolute;

`;

const Details = styled.div`
    margin-top: 250px;
    margin-left: 40px;
    padding-left: 12px;
    padding-right: 26px;

    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-auto: 2fr 1fr;
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
    background-color: #3F3FB7;
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

    return <Container image={cover}>
        <Details>
            <Title>{ title }</Title>
            <Price>{ `${price} $` }</Price>
            <Categories>{ categories.join(', ') }</Categories>
        </Details>
        <Fade/>
    </Container>    
}
