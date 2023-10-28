// eslint-disable-next-line no-unused-vars
import React from 'react'
import './DestinationCard.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const DestinationCard = (props) =>  {

  return (
      <div className="DestinationCard" style={{ backgroundImage:`url(${props.img_url})`}} >
        <div className="card-info">
          <h2 className="destination">{props.destination}</h2>
          <p className="description">{props.description}</p>
         <Link to={'add/'+ props.id}><button className="addToTripBtn">+ Add to Trip</button></Link>
        </div>
      </div>
  );
};

DestinationCard.propTypes = {
  img_url: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default DestinationCard;
