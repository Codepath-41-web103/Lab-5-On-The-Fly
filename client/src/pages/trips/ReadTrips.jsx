// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, Fragment } from 'react';
import Card from '../components/Card';
import PropTypes from 'prop-types'


const ReadTrips = (props) => {

    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
        setPosts(props.data);
    }, [props]);
    
    return (
        <div className="ReadTrips">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                    <Fragment key={index}>
                   <Card key={post.id} 
                         id={post.id} 
                         title={post.title} 
                         description={post.description} 
                         img_url={post.img_url} 
                         num_days={post.num_days}
                         start_date={post.start_date}
                         end_date={post.end_date}
                         total_cost={post.total_cost} />
                    </Fragment>
                ) : <h3 className="noResults">{'No Trips Yet 😞'}</h3>
            }
        </div>  
    )
}

ReadTrips.propTypes = {
    data: PropTypes.array.isRequired
}
export default ReadTrips;