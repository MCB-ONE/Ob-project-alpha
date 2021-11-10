import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/** Icons imports */
import { RiComputerFill, RiMoneyEuroBoxFill } from 'react-icons/ri';
import { BsFillPinFill } from 'react-icons/bs';
import Spinner from './Spinner';
import DeloiteIcon from '../../../public/images/company_images/deloite-icon.svg';
/** Post date and techIcons array helpers import */
import { techIcons, generatePostDate } from '../../utils/helpers';

/** Style import */
import '../../styles/css/offer-detail.scss';

/** Import getbyId axios service */
import { getOfferByID } from '../../services/axiosService';

/** Function to show randome tech icon */
const randomIcon = () => {
    return techIcons[Math.floor(Math.random() * techIcons.length)];
};

const OfferDetail = () => {
    // Extract id from the path params
    const params = useParams();
    const { id } = params;

    // Use state to store the offer datat
    const [offer, setOffer] = useState({});

    /** UseEffect to trigger the request */
    useEffect(() => {
        console.log(id);
        const obtainOfferByID = (/* id */) => {
            getOfferByID(id)
                .then((response) => {
                    if (response.data && response.status === 200) {
                        console.log(JSON.stringify(response.data));
                        setOffer(response.data);
                    } else {
                        throw new Error('Oferta no encontrada');
                    }
                })
                .catch((error) => alert(`Ha sucedido un error: ${error}`));
        };
        obtainOfferByID(id);
    }, [id]);

    /** Generate array icons using technologies json offer */
    const techIconsCollection = [];
    for (let i = 0; i < offer.technologies; i + 1) {
        techIconsCollection.push();
    }

    return (
      <>
        {offer ? (
          <article className="row mt-4 offer-detail">
            <div className="company-logo col-12 col-lg-3 text-center mb-4 ">
              <img src={DeloiteIcon} alt="company icon" />
            </div>
            <div className="summary col-12 col-lg-9 mt-3 mt-lg-0">
              <h2 className="m-0 mb-1 h1 offer-company">{offer.enterpriseName}</h2>
              <p className="offer-name mb-0 h4">{offer.offerName}</p>
              <p className="offer-address mb-0 ">{offer.location}</p>
            </div>
            <hr className="divider" />
            <div className="content text-violet--dark">
              <div className="mb-4">
                <p className="content-title h5 mb-2">Resumen</p>
                <p>{offer.summary}</p>
              </div>
              <div className="mb-4">
                <p className="content-title h5 mb-2">Responsabilidades</p>
                <p>{offer.responsibility}</p>
              </div>
              <div className="mb-4">
                <p className="content-title h5 mb-2">Requisitos</p>
                <p>{offer.requeriments}</p>
              </div>
              <div className="mb-4">
                <p className="content-title h5 mb-2">Destacado</p>
                <div className="featured mb-3">
                  <div className="feature">
                    <RiMoneyEuroBoxFill />
                    {offer.salary}
                  </div>
                  <div className="feature vertical-separator">
                    <RiComputerFill />
                    {offer.modality}
                  </div>
                  <div className="feature vertical-separator">
                    <BsFillPinFill />
                    {generatePostDate(offer.date)}
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <p className="content-title h5 mb-2">Stack necesario</p>
                <div className="tech row text-center align-items-center">
                  { // TODO Show real tech icons.
                    // eslint-disable-next-line max-len
                    // Use random icon function to show icons test in a for loop that loops are the tech json length
                  }
                  <div className="col">
                    <img src={randomIcon().src} alt="tech icon" />
                  </div>
                  <div className="col">
                    <img src={randomIcon().src} alt="tech icon" />
                  </div>
                  <div className="col">
                    <img src={randomIcon().src} alt="tech icon" />
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-primary btn-lg w-100 mt-4">
                Aplicar
              </button>
            </div>
          </article>
            ) : <Spinner />}
      </>
    );
};

export default OfferDetail;
