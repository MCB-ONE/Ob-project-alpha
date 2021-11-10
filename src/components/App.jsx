import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../utils/config/themeConfig';
import AppbarUnloged from './header/AppbarUnloged';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import DetailOfferPage from '../pages/DetailOfferPage';
/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppbarUnloged />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/offers/:id">
            <DetailOfferPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
