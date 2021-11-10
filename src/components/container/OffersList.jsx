import React, { useState, useEffect } from 'react';
import OfferSummary from '../pure/OfferSummary';

/** Axios service import */
import { getAllOffers } from '../../services/axiosService';

/** Styles */
import '../../styles/css/offers-list.scss';

const OffersList = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        getAllOffers()
        .then((response) => {
            if (response.status === 200 && response.data) {
                setOffers(response.data);
                console.log(response.data);
            }
        })
        .catch((error) => {
            console.log(error);
    });
    }, []);

    return (
      <>
        {offers.length > 0 ? (
          <div className="offers-list-container">
            <h2 className="h3 mb-3">Ofertas</h2>
            <div className="offers-list row">
              {
                        offers.map((offer) => {
                            return (
                              <OfferSummary
                                key={offer.id}
                                offer={offer}
                              />
                            );
                        })
                    }
            </div>
          </div>
            ) : (<p className="big-message">No hay ofertas para mostrar</p>)}
      </>
    );
};

export default OffersList;
