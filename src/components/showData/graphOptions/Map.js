import React from 'react';
import dataMap from '../../../img/mapUsa.png';

const Map = () => {
    return (
        <div>
            <img src={dataMap} width='300' height='330' alt='usa-map' />
            <p className='usa-data'>*Data unicamente de USA</p>
        </div>
    );
};

export default Map;
