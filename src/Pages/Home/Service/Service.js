import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sevice.css'

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    const navigate = useNavigate()
    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h3> {name}</h3>
            <p>price : {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetails(id)} className='btn btn-primary'>Get Service</button>
        </div>
    );
};

export default Service;