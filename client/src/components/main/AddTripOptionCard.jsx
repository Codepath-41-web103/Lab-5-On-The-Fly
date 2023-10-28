
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.scss'

const AddTripOptionCard = (props) => {
  const { destination_id } = useParams();

  const addToTrip = async (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ trip_id: props.id, destination_id: destination_id })
    }

    await fetch('/api/trips-destinations', options)
    window.location.href = '/'
  }

  return (
    <div className="Card" style={{ backgroundImage: `url(${props.img_url})` }} >
      <div className="card-info">
        <h2 className="title">{props.title}</h2>
        <p className="description">{props.description}</p>
        <button className="addToTrip" onClick={addToTrip}>+ Add to Trip</button>
      </div>
    </div>
  );
};

AddTripOptionCard.propTypes = {
  id: PropTypes.number.isRequired,
  img_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default AddTripOptionCard;