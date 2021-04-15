import React from "react";
import styled from "styled-components";

const Container = styled("div")<{image: string}>`
    background-image: url(${props => props.image});
    background-size: cover;
    height: 300px;
    width: 200px;
    position: relative;
    // margin-left: -50px;

`

const Fade = styled.div`
  background: transparent linear-gradient(180deg, #00000000 0%, #000000 60%) 0% 0% no-repeat padding-box;
  bottom: 33px;
  right: 0;
  width: 160px;
  height: 60px;
  position: absolute;


`;

const Details = styled.div`
margin-top: 210px;
margin-left: 40px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-auto: 2fr 1fr;

    grid-template-areas: "title price" "category price"
`

const Title =styled.div`
z-index:1;
font-size: 15px;
font-family: "Lao MN";
font-weight: 600;
`

const Category = styled.div`
    font-size: 11px;
    z-index:1;
`

const Price = styled.div`
    font-size: 11px;
    width: 53px;
    height: 17px;
    background-color: #3F3FB7;
    text-align: center;
    padding-top: 4px;
    margin-right: 5px;
    z-index:1;
    border-radius: 9px;

    grid-area: price;
    align-self: center;
`

export type CardProps = {
    cover: string;
  };

export function GameCard({cover}: CardProps) {
console.log(cover);
    return <Container image={cover}>
        <Fade/>
        <Details>

        <Title>The Witcher</Title>
        <Price>19.99$</Price>
        <Category>Action, Adventure</Category>
        </Details>
    </Container>    
}
