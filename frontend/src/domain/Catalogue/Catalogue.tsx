import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { GameCard } from "../../components/GameCard/GameCard";
import witcher from "../../assets/witcher.png";
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
  padding-top: 24px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export function Catalogue() {
  const breadcrumbs = [
    { to: "/", label: "Home" },
    { to: "/insight/action", label: "Store" },
  ];

  const dispatch = useDispatch();

  const filteredGames = useSelector(getFilteredItems);
  useEffect(() => {
    dispatch(catalogueFetch());
  }, [dispatch]);

  const {
    location: { pathname },
  } = useHistory();

  return (
    <Home breadcrumbs={breadcrumbs}>
      <Container>
        <Header>{pathname.split("/").pop()}</Header>
        <Items>
          {filteredGames.map(({ id, product_name, category, price }, index) => (
            <GameCard
              key={index}
              id={id}
              title={product_name}
              category={category}
              price={price}
              cover={witcher}
            />
          ))}
        </Items>
      </Container>
    </Home>
  );
}
