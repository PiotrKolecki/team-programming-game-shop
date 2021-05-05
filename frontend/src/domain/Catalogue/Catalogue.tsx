import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { GameCard } from '../../components/GameCard/GameCard';
import witcher from "../../assets/witcher.png";
import { theme as appTheme } from "../../constants";
import { Home } from '../Home/Home';
import { catalogueFetch } from '../../store/catalogue/index';

const Container = styled.div`
    padding: 40px 48px;
    grid-area: catalogue;
    background-color: ${appTheme.colors.mirage};
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
    const item = { title: 'The Witcher', categories: ['Action', 'Adventure'], price: 19.99, cover: witcher} ;
    const items = [item, item, item, item, item, item, item, item, item, item];
    const breadcrumbs = [{to: "/", label: "Home"}, {to: "/insight/action", label: "Store"}];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(catalogueFetch());
    }, [dispatch]);


    return (<Home breadcrumbs={breadcrumbs}>
                <Container>
                        <Header>
                            Action
                        </Header>
                        <Items>
                            { items.map(({ title, categories, price, cover }, index) => <GameCard key={index} title={title} categories={categories} price={price} cover={cover}/>)}  
                        </Items>
                    </Container> 
            </Home>
     )}