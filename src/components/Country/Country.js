import React from 'react';

const Country = (props) => {
    const {population, region, capital,flag} = props.country;
    const handleAddButton = props.handleAddButton;
    return (
        <div style={{border: '1px solid red ', width: '250px', padding: '10px',margin: '5px', borderRadius: '12px'}}>
            <h1 style={{}}>  {flag} </h1>
            <p> Population{population} </p>
            <p>Region{region} </p>
            <p>capital:{capital} </p>
            <button onClick={()=> handleAddButton (props.handleAddButton) }>Add Country</button>
           

        </div>
    );
};

export default Country;