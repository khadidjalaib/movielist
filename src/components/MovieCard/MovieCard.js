import React from 'react'
import "./MovieCard.css"
const MovieCard = (props) => {
    return (
        <div className="carte">
            <span className="titre">{props.Title}</span>
            <img alt="photto" ></img>
            
            <p>{props.description}</p>
            <span className="rating">rate:{props.rate}</span>
        </div>
    )
}

export default MovieCard
