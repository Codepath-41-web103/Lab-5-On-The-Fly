// No need to import React since it's not being used
import PropTypes from 'prop-types';
import './DestinationBtn.scss'


const DestinationBtn = (props) =>  {

  return (
    <button className="DestinationBtn" id={props.id}>{props.destination}</button>
  );

};

DestinationBtn.propTypes = {
  id: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired
};

export default DestinationBtn;