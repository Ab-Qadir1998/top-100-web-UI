import React from 'react'

const ServicesCard = ({card}) => {
    return (
        <div class="card">
            <figure>
                <img src={card?.img} class="img-fluid" alt="services" />
            </figure>
            <h3>{card?.name}</h3>
            <a href="#">LEARN MORE</a>
        </div>
    )
}

export default ServicesCard