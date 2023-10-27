// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, Fragment } from 'react';
import DestinationCard from '../components/DestinationCard';


const ReadDestinations = (props) => {

    const [destinations, setDestinations] = useState([]);


    useEffect(() => {
        const fetchDestinations = async () => {
            const response = await fetch('/api/destinations')
            const data = await response.json()
            setDestinations(data)
        }
        fetchDestinations()
    }, [props]);
    

    return (
        <div className="ReadDestinations">
            {
                destinations && destinations.length > 0 ?
                destinations.map((destination,index) => 
                <Fragment key={index}>
                   <DestinationCard key={destination.id} 
                         id={destination.id} 
                         destination={destination.destination} 
                         description={destination.description} 
                         city={destination.city} 
                         country={destination.country}
                         img_url={destination.img_url}
                         flag_img_url={destination.flag_img_url} 
                    />
                </Fragment>
                ) : <h3 className="noResults">{'No Destinations Yet 😞'}</h3>
            }
        </div>  
    )
}

export default ReadDestinations;