import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../img/data-logo.svg';
import individual from '../../img/individual.svg';
import team from '../../img/team.svg';
import './index.css';

const Index = (props) => {

    const handleClick = () => {
        props.history.push('/login');
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='center'>
                        <img src={logo} alt='logo' className='logo-index' />
                    </div>
                    <p className='welcome'>¡Bienvenido a Data Lovers!</p>
                    <div className='about-us'>
                        <p> Somos una empresa dedicada a cambiar la manera de entender, interpretar y visualizar la data.</p>
                        <p>Hacemos que el análisis de datos sea <span className='bold'>rápido, facíl, atractivo y útil.</span></p>
                    </div>
                    <div className='col s6' onClick={handleClick}>
                        <div className='icon-info'>
                            <div className='center'>
                                <img src={individual} alt='individual' className='icon' />
                            </div>
                            <p className='bold who'>Para analistas indivuales</p>
                        </div>
                        <p className='info'>La exploración de datos te espera. Convierte los datos en tu mejor amigo.</p>
                    </div>
                    <div className='col s6' onClick={handleClick}>
                        <div className='icon-info'>
                            <div className='center'>
                                <img src={team} alt='team' className='icon' />
                            </div>
                            <p className='bold who'>Para <br /> empresas</p>
                        </div>
                        <p className='info'>Toma las mejores decisiones para tu empresa usando datos confiables.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default withRouter(Index);
