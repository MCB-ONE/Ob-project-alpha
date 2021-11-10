import React from 'react';
import OffersList from '../components/container/OffersList';
import Search from '../components/pure/Search';
/** Styles */
import '../styles/css/home.scss';

const HomePage = () => {
    return (
      <div className="app-content container-fluid home row justify-content-center mx-0 p-0">
        <div className="col-md-6 title-wrapper">
          <h2 className="mb-4 big-title">
            Portal de
            {' '}
            <span className="text-green">empleo</span>
            {' '}
            para
            {' '}
            <span className="text-blue">Botcampers</span>
            {' '}
          </h2>
          <Search />
        </div>
        <OffersList />
      </div>
    );
};

export default HomePage;
