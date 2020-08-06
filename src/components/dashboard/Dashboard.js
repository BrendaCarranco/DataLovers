import React from 'react';
import './dashboard.css';
import train from '../../img/tractor.svg';
import bus from '../../img/furgoneta.svg';
import truck from '../../img/camion.svg';
import car from '../../img/coche.svg';
import motorcycle from '../../img/moto.svg';
import plane from '../../img/aeroplano.svg';
import boat from '../../img/enviar.svg';
import logo from '../../img/data-logo.svg';
import { withRouter } from 'react-router-dom';

const Dashboard = ({ medio, setMedio, history, setPic }) => {

    const handleClick = e => {
        setMedio(e.target.id);
        if (medio !== null) {
            setPic(e.target.src);
            history.push('./data');
            console.log(medio);
        } else {
            return;
        }
    };

    const handleFooter = () => {
        history.push('/');
    };

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='header'>Personas heridas por Medios de Transporte</h1>
                <div className='col'>
                    <p className='db-info'>Esta base de datos incluye el
                        registro de <span className='bold-red'>personas heridas</span> por
                        distintos medios de transporte.
                        Datos del año de <span className='bold-red'>1960 a 2016</span>.</p>
                    <p className='db-info'>Selecciona un medio de transporte:</p>
                </div>
                <div className='icon-grid col'>
                    <div className='center'>
                        <img src={train} className='icon-btn' alt='train' id='Total_Injured_Persons_Railroad_Train_Accidents' onClick={handleClick} />
                        <img src={bus} className='icon-btn' alt='bus' id='Total_Injured_Persons_Bus_Occupants' onClick={handleClick} />
                        <img src={truck} className='icon-btn' alt='truck' id='Total_Injured_Persons_Truck_Occupants_Large' onClick={handleClick} />
                        <img src={car} className='icon-btn' alt='car' id='Total_Injured_Persons_Passenger_Car_Occupants' onClick={handleClick} />
                        <img src={motorcycle} className='icon-btn mt-icon' alt='motorcycle' id='Total_Injured_Persons_Motorcyclists' onClick={handleClick} />
                        <img src={plane} className='icon-btn mt-icon' alt='plane' id='Total_Injured_Persons_General_Aviation' onClick={handleClick} />
                        <img src={boat} className='icon-btn mt-icon middle' alt='boat' id='Total_Injured_Persons_Recreational_Boating' onClick={handleClick} />
                    </div>
                </div>
                <footer>
                    <div className='center'>
                        <img src={logo} className='footer-logo center' alt='logo-footer' onClick={handleFooter} />
                    </div>
                </footer>
            </div>
        </div >
    );
};

export default withRouter(Dashboard);
