import React from 'react';
/** Styles import */
import '../../styles/css/offer-summary.scss';
import { Link } from 'react-router-dom';

/** Icons imports  */
import { RiComputerFill, RiMoneyEuroBoxFill } from 'react-icons/ri';
import { BsFillPinFill } from 'react-icons/bs';
import DeloiteIcon from '../../../public/images/company_images/deloite-icon.svg';
/* Spinner imports */
import Spinner from './Spinner';

/** Post date helper import */
import { generatePostDate } from '../../utils/helpers';

const OfferSummary = ({ offer }) => {
    const {
 enterpriseName, offerName, date, salary, modality, summary,
} = offer;

    return (

      <>
        {offer ? (
          <article className="offer-card col-12 col-md-4 row mb-4 mb-md-0">
            <div className="company-logo col-3 px-0">
              <img src={DeloiteIcon} alt="company icon" className="w-100 " />
            </div>
            <div className="col-9 pe-0">
              <div className="date mb-1">
                <BsFillPinFill />
                {generatePostDate(date)}
              </div>
              <Link to={`offers/${offer.id}`}>
                <h2 className="title m-0">{offerName}</h2>
                <p className="company-name mb-0">{enterpriseName}</p>
              </Link>
              <div className="featured-container col-12  mt-2 p-0 d-none d-md-flex">
                <div className="feature">
                  <RiMoneyEuroBoxFill />
                  {salary}
                </div>
                <div className="feature">
                  <RiComputerFill />
                  {modality}
                </div>
              </div>
            </div>
            <div className="featured-container col-12  mt-2 p-0 d-md-none">
              <div className="feature">
                <RiMoneyEuroBoxFill />
                {salary}
              </div>
              <div className="feature">
                <RiComputerFill />
                {modality}
              </div>
            </div>
            <div className="descripton  d-none d-lg-block">
              <p className="subtitle mt-3 mb-1"> Resumen</p>
              <p className="mt-0 mb-0">{summary}</p>
            </div>
          </article>
            ) : <Spinner />}

      </>
    );
};

export default OfferSummary;
