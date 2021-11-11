// Imports de React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux Imports:
import { Provider } from 'react-redux';

// import { Provider } from 'react-redux';
import App from './components/App';
// Import funtion to create store
import createAppAsyncStore from './store/config/store.config';

// Importamos las hojas de estilos
import './styles/css/index.scss';

// We create the app store
// eslint-disable-next-line prefer-const
let appAsyncStore = createAppAsyncStore();

ReactDOM.render(
  <Provider store={appAsyncStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
    document.getElementById('root'),
);
