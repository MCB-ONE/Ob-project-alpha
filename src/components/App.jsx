import React from 'react';
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'; */
import { ThemeProvider } from '@material-ui/styles';
import theme from '../utils/config/themeConfig';
/* import AppbarUnloged from './header/AppbarUnloged';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import DetailOfferPage from '../pages/DetailOfferPage'; */
import OffersContainer from './container/OffersContainer';
/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/*  <Router>
        <AppbarUnloged />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/offers/:id" component={DetailOfferPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router> */}
      <OffersContainer />
    </ThemeProvider>
  );
};

export default App;
