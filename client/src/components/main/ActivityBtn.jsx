
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './ActivityBtn.scss';
import PropTypes from 'prop-types';

const ActivityBtn = (props) => {

  const [num_votes, setNumVotes] = useState(props.num_votes)

  const updateCount = () => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ num_votes: num_votes + 1 })
    }

    fetch('/api/activities/' + props.id, options)
    setNumVotes((num_votes) => num_votes + 1)
  }

  return (
    <button className='activityBtn' id={props.id} onClick={updateCount}>
      {props.activity} <br /> {'△ ' + num_votes + ' Upvotes'}
    </button>
  )
}

ActivityBtn.propTypes = {
  id: PropTypes.number.isRequired,
  num_votes: PropTypes.number.isRequired,
  activity: PropTypes.string.isRequired
}

export default ActivityBtn;


