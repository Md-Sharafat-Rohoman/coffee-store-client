import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    console.log(initialCoffees);
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        <div >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                {
                    coffees.map(coffee => <CoffeeCard coffees={coffees} setCoffees={setCoffees} coffee={coffee} key={coffee._id}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;