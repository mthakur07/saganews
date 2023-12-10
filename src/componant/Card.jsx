import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({item}) {

    const description = item.description;
    const limit = 100;
    
    const limitDescription = (description, limit) => {
        if (description.length > limit) {
            return description.slice(0, limit);
        }
        return description;
    };
    
    const limitedDescription = limitDescription(description, limit);

    
    return (
        <div className='col-sm-3 mb-2'>
            <div className="card">
                <img src={item.urlToImage} className="card-img-top" alt={item.title} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{limitedDescription}</p>
                    <Link to={item.url} className="btn btn-primary" target='_self'>read More</Link>
                </div>
            </div>
        </div>
    )
}
