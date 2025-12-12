import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeeDetails = () => {
    const coffee = useLoaderData();  // Single object
    // const { id } = useParams();      // Route parameter


    return (
        <div>
            <h1>Coffee Details</h1>
            <h2>{coffee.name}</h2>
            <p>{coffee.details}</p>
        </div>
    );
};

export default CoffeeDetails;
