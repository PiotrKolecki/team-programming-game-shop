import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { GameCard } from "../../components/GameCard/GameCard";
import mario5 from "../../assets/5mario.jpg";
import witcher6 from "../../assets/6witcher.jpg";
import cyberpunk8 from "../../assets/8cyberpunk.jpg";
import gothic9 from "../../assets/9gothic.jpg";
import baba10 from "../../assets/10baba.jpg";
import gta11 from "../../assets/11gta.jpg";
import defaultCover from "../../assets/defaultCover.png";
import { theme as appTheme } from "../../constants";
import { Home } from "../Home/Home";
import { catalogueFetch } from "../../store/catalogue/index";
import { getFilteredItems } from "../../store/filtering/selectors";
import { useHistory } from "react-router";

const Container = styled.div`
  padding: 40px 48px;
  grid-area: catalogue;
  background-color: ${appTheme.colors.mirage};
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
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;
export function Catalogue() {
  const breadcrumbs = [
    { to: "/", label: "Home" },
    { to: "/insight/all", label: "Store" },
  ];

  const dispatch = useDispatch();

  const filteredGames = useSelector(getFilteredItems);
  useEffect(() => {
    dispatch(catalogueFetch());
  }, [dispatch]);

  const {
    location: { pathname },
  } = useHistory();

  const covers = [mario5, witcher6, cyberpunk8, gothic9, baba10, gta11];

  return (
    <Home breadcrumbs={breadcrumbs}>
      <Container>
        <Header>{pathname.split("/").pop()}</Header>
        <Items>
          {filteredGames.map(({ id, product_name, category, price }, index) => {
            const cover = covers.find(cover => cover.split('/')[3].startsWith(String(id))) || defaultCover;
            
            return(
              <GameCard
              key={index}
              id={id}
              title={product_name}
              category={category}
              price={price}
              cover={cover}
              />
            
          )})}
        </Items>
      </Container>
    </Home>
  );
}
