import React from 'react';

const Country = (props) => {
    const {population, region, capital,flag} = props.country
    return (
        <div>
            <h1 style={{width: '80px', height: '40px'}}>  {flag} </h1>
            <p> Population{population} </p>
            <p>Region{region} </p>
            <p>capital:{capital} </p>
           

        </div>
    );
};

export default Country;