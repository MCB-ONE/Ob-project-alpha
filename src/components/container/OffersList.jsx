import React, { /* useState, */ useEffect } from 'react';
/* import PropTypes from 'prop-types'; */
/* import OfferSummary from '../pure/OfferSummary'; */

/** Styles */
import '../../styles/css/offers-list.scss';

const OffersList = ({ offers, obtainOffers }) => {
    /* const [offers, setOffers] = useState({}); */

    useEffect(() => {
      /* setOffers(obtainOffers()); */
      console.log(offers, obtainOffers);
    }, []);

    return (
      <h1>Offers List</h1>
    );
};

/* OffersList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  offerList: PropTypes.array.isRequired,
  obtainOffers: PropTypes.func.isRequired,
}; */

export default OffersList;
