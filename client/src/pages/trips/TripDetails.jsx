// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, Fragment} from 'react';
import { Link, useParams } from 'react-router-dom';
import { DestinationBtn, ActivityBtn } from '../../components/main/index';
import './TripDetails.scss'
import PropTypes from 'prop-types'

const TripDetails = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: 0, title: "", description: "", img_url: "", num_days: 0, start_date: "", end_date: "", total_cost: 0.0 })
    const [activities, setActivities] = useState([])
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        const result = data.filter(item => item.id === parseInt(id))[0];
        setPost({id: parseInt(result.id), title: result.title, description: result.description, img_url: result.img_url, num_days: parseInt(result.num_days), start_date: result.start_date.slice(0,10), end_date: result.end_date.slice(0,10), total_cost: result.total_cost});

        const fetchActivities = async () => {
            const response = await fetch('/api/activities/' + id)
            const data = await response.json()
            setActivities(data)
        }

        const fetchDestinations = async () => {
            const response = await fetch('/api/trips-destinations/destinations/' + id)
            const data = await response.json()
            setDestinations(data)
        }


        fetchActivities();
        fetchDestinations();

    }, [data, id]);


    return (
        <div className="out">
            <div className="flex-container">

                <div className="left-side">
                    <h3>{post.title}</h3>
                    <p>{"🗓️ Duration: " + post.num_days + " days "}</p>
                    <p>{"🛫 Depart: " + post.start_date }</p>
                    <p>{"🛬 Return: " + post.end_date}</p>
                    <p>{post.description}</p>
                </div>

                <div className="right-side" style={{ backgroundImage:`url(${post.img_url})`}}>
                </div>
            </div>

            <div className="flex-container">
                <div className="activities">
                {
                activities && activities.length > 0 ?
                activities.map((activity,index) => 
                    <Fragment key={index}>
                    <ActivityBtn id={activity.id} activity={activity.activity} num_votes={activity.num_votes}/>
                    </Fragment>
                ) : ''
                }
                    <br/>
                    <Link to={'../../activity/create/'+ id }><button className="addActivityBtn">+ Add Activity</button></Link>
                </div>
                <div className="destinations">
                {
                destinations && destinations.length > 0 ?
                destinations.map((destination,index) => 
                    <Fragment key={index}>
                    <DestinationBtn id={destination.id} destination={destination.destination} />
                    </Fragment>
                ) : ''
                }
                    <br/>
                    <Link to={'../../destination/new/'+id}><button className="addDestinationBtn">+ Add Destination</button></Link>
                </div>
            </div>
            
        </div>
            


    )
}

TripDetails.propTypes = {
    data: PropTypes.array.isRequired
}
export default TripDetails