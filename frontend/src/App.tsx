import { useEffect, useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { WelcomeScreen, Catalogue, SingleGame, Logout, AdminPanel } from "./domain";
import background from "./assets/background.png";
import { Masthead } from "./components/Masthead";
import Footer from "./components/Footer/Footer";
import PersonalData from "./domain/Account/PersonalData/PersonalData";
import Orders from "./domain/Account/Orders/Orders";
import Cart from "./domain/Account/Cart/Cart";
import { AppState } from "./store/rootReducer";
import { getTokenSelector } from "./store/user/selectors";
import { checkUserTokenRequest } from "./store/user/actions";
import { Alert } from "./components";
import { getOrderStatusSelector } from "./store/orders/selectors";

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
  exact: boolean | undefined;
};

const routeItems: Array<RouteItem> = [
  {
    path: "/logout",
    component: <Logout />,
    authenticated: true,
    exact: false,
  },
  {
    path: "/signin",
    component: <WelcomeScreen type="sign in" />,
    authenticated: false,
    exact: false,
  },
  {
    path: "/register",
    component: <WelcomeScreen type="register" />,
    authenticated: false,
    exact: false,
  },
  {
    path: "/insight/:category",
    component: (
      <>
        <Catalogue />
        <Footer />
      </>
    ),
    authenticated: null,
    exact: true,
  },

  {
    path: "/insight/:category/:id",
    component: (
      <>
        <SingleGame />
        <Footer />
      </>
    ),
    authenticated: null,
    exact: false,
  },
  {
    path: "/profile",
    component: (
      <>
        <PersonalData />
        <Footer />
      </>
    ),
    authenticated: true,
    exact: false,
  },
  {
    path: "/orders",
    component: (
      <>
        <Orders />
        <Footer />
      </>
    ),
    authenticated: true,
    exact: true,
  },
  {
    path: "/cart",
    component: (
      <>
        <Cart />
        <Footer />
      </>
    ),
    authenticated: null,
    exact: false,
  },
  {
    path: "/admin",
    component: (
      <>
        <AdminPanel />
        <Footer />
      </>
    ),
    authenticated: true,
    exact: false,
  },
];

function App() {
  const dispatch = useDispatch();
  
  const [orderAlertVisibility, setOrderAlertVisibility] = useState(false);
  const token = useSelector<AppState>(getTokenSelector);
  const orderCompleted = useSelector<AppState>(getOrderStatusSelector);
  const isLoggedIn = Boolean(token);
  const history = useHistory();

  useEffect(() => {
    if (orderCompleted) {
      history.push("/orders");
      setOrderAlertVisibility(true);
    }
  }, [orderCompleted, history]);

  const onCloseAlertHandler = () => {
    setOrderAlertVisibility(false);
  };

  useEffect(() => {
    dispatch(checkUserTokenRequest());
  }, [dispatch])

  return (
    <Main>
      {orderAlertVisibility && (
        <Alert
          type="success"
          text="Order completed!"
          onClose={onCloseAlertHandler}
        />
      )}
      <Fade>
        <Masthead />
        <Switch>
          {routeItems
            .filter(
              ({ authenticated }) =>
                authenticated === isLoggedIn || authenticated === null
            )
            .map((item) => (
              <Route key={item.path} path={item.path} exact={item.exact}>
                {item.component}
              </Route>
            ))}
          <Redirect to="/signin" />
        </Switch>
      </Fade>
    </Main>
  );
}

export default App;
