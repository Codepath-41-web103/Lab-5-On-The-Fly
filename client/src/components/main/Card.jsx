// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Card.scss'
import more from './more.png'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Card = (props) =>  {

  return (
      <div className="Card" style={{ backgroundImage:`url(${props.img_url})`}} >
        <div className="card-info">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="title">{props.title}</h2>
          <p className="description">{props.description}</p>
          <button className="priceBtn">{props.total_cost}</button>
          <button className="daysBtn">{props.num_days + " days"}</button>
          <Link to={'trip/get/'+ props.id}><button className="seeMoreBtn">See More</button></Link>
        </div>
      </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  img_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  total_cost: PropTypes.number.isRequired,
  num_days: PropTypes.number.isRequired
};

export default Card;