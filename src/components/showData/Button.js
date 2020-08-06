import React, { Fragment } from 'react';
import './button.css';

const Button = (props) => {

    const handleGraphic = () => {
        console.log(props.label);
        props.mapData();
        if (props.label === 'tabla') {
            console.log('aqui va una tabla');
            return (
                <div>es tabla</div>
            );
            //console.log(props.dataArray, 'button js');
            /*             {
                            props.dataArray.map((item) => {
                                console.log(item, 'map');
                            });
                        } */

        }
    };


    return (
        <Fragment>
            <button className='select-graph' onClick={handleGraphic}>{props.label}</button>
        </Fragment>
    );
};

export default Button;
