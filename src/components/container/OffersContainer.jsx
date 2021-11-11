/* import React from 'react'; */
import { connect } from 'react-redux';
import { httpRequest } from '../../store/actions/offersActions';
import OffersList from './OffersList';

const mapStateToProps = (state) => {
    return {
        offerList: state.offerList,
    };
};

// TODO Filer offers function
const mapDispatchToProps = (dispatch) => {
    return {
        obtainOffers: () => {
            const url = 'https://backend-proyect-alpha.herokuapp.com/api/offers';
            dispatch(httpRequest('get', url));
        },
    };
};

// We connect State & Dispatch to OfferList's Props
const OffersContainer = connect(mapStateToProps, mapDispatchToProps)(OffersList);

export default OffersContainer;
