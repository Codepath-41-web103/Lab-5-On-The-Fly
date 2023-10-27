// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, Fragment } from 'react';
import AddTripOptionCard from '../components/AddTripOptionCard';
import PropTypes from 'prop-types'

const AddToTrip = (props) => {

    const [trips, setTrips] = useState([]);
    

    useEffect(() => {
        setTrips(props.data);
    }, [props]);
    
    return (
        <div className="AddToTrip">
            {
                trips && trips.length > 0 ?
                trips.map((trip,index) => 
                <Fragment key={index}>
                   <AddTripOptionCard key={trip.id} 
                         id={trip.id} 
                         title={trip.title} 
                         description={trip.description} 
                         img_url={trip.img_url}  />
                </Fragment>
                ) : <h3 className="noResults">{'No Trips Yet 😞'}</h3>
            }
        </div>  
    )
}
AddToTrip.propTypes = {
    data: PropTypes.array.isRequired
}
export default AddToTrip;