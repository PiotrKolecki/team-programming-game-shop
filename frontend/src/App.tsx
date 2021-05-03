import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { WelcomeScreen, Catalogue, SingleGame, Home, Logout} from "./domain";
import background from "./assets/background.png";
import { Masthead } from "./components/Masthead";
import Footer from "./components/Footer/Footer";
import PersonalData from "./domain/Account/PersonalData/PersonalData";
import Orders from "./domain/Account/Orders/Orders";
import { AppState } from "./store/rootReducer";
import { getTokenSelector } from "./store/user/selectors";

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

type RouteItem = {
  path: string;
  component: React.ReactElement;
  authenticated: boolean | null;
};

const routeItems: Array<RouteItem> = [
  {
    path: "/logout",
    component: <Logout />,
    authenticated: true,
  },
  {
    path: "/signin",
    component: <WelcomeScreen type="sign in" />,
    authenticated: false,
  },
  {
    path: "/register",
    component: <WelcomeScreen type="register" />,
    authenticated: false,
  },
  {
    path: "/insight",
    component: (
      <>
        <Home />
        <Footer />
      </>
    ),
    authenticated: null,
  },
  {
    path: "/profile",
    component: (
      <>
        <PersonalData />
        <Footer />
      </>
    ),
    authenticated: null,
  },
  {
    path: "/orders",
    component: (
      <>
        <Orders />
        <Footer />
      </>
    ),
    authenticated: null,
  },
];

function App() {
  const token = useSelector<AppState>(getTokenSelector);

  const isLoggedIn = Boolean(token);

  return (
    <Main>
      <Fade>
        <Masthead />
        <Switch>
          {routeItems
            .filter(
              ({ authenticated }) =>
                authenticated === isLoggedIn || authenticated === null
            )
            .map((item) => (
              <Route key={item.path} path={item.path}>
                {item.component}
              </Route>
            ))}
          <Redirect to="/insight" />
          <Route path="/signin">
            <WelcomeScreen type="sign in" />
          </Route>
          <Route path="/register">
            <WelcomeScreen type="register" />
          </Route>
          <Route path="/insight/:category" exact>
            <Catalogue />
          </Route>
          <Route path="/insight/:category/:id">
            <SingleGame />
          </Route>
          <Redirect to="/signin" />
        </Switch>
      </Fade>
    </Main>
  );
}

export default App;
