import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import { WelcomeScreen, Home, SingleGame } from "./domain";
import background from "./assets/background.png";
import { Masthead } from "./components/Masthead";

const Main = styled.main`
  background: transparent url(${background}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  color: white;
`;

const Fade = styled.div`
  background: transparent
    linear-gradient(89deg, #0000009b 0%, #14141464 46%, #54545400 100%) 0% 0%
    no-repeat padding-box;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;

function App() {
  return (
    <Main>
      <Fade>
        <Masthead />
        <Switch>
          <Route path="/signin">
            <WelcomeScreen type="sign in" />
          </Route>
          <Route path="/register">
            <WelcomeScreen type="register" />
          </Route>
          <Route path="/insight/:category" exact>
            <Home />
          </Route>
          <Route path="/insight/:category/:id" component={SingleGame}>
            <SingleGame />
          </Route>
          <Redirect to="/signin" />
        </Switch>
      </Fade>
    </Main>
  );
}

export default App;
