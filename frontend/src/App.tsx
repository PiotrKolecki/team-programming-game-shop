import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import { WelcomeScreen, Catalogue, SingleGame } from "./domain";
import background from "./assets/background.png";
import { Masthead } from "./components/Masthead";
import Footer from "./components/Footer/Footer";
import PersonalData from "./domain/Account/PersonalData/PersonalData";
import Orders from "./domain/Account/Orders/Orders";

const Main = styled.main`
  background: transparent url(${background}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  overflow-y: hidden;
  color: white;
`;

const Fade = styled.div`
  background: transparent
    linear-gradient(89deg, #0000009b 0%, #14141464 46%, #54545400 100%) 0% 0%
    no-repeat padding-box;
  min-height: 100vh;
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
            <Catalogue />
          </Route>
          <Route path="/insight/:category/:id" component={SingleGame}>
            <SingleGame />
          </Route>
          <Route path="/profile">
            <PersonalData />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Redirect to="/signin" />
        </Switch>
        {/* <Footer /> */}
      </Fade>
    </Main>
  );
}

export default App;
