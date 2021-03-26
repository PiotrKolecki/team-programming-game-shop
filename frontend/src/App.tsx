import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Login } from "./domain";
import background from "./assets/background.png";

const Main = styled.main`
  background: transparent url(${background}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  color: white;
`;

function App() {
  return (
    <Main>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </Main>
  );
}

export default App;
