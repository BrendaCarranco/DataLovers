import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../img/data-logo.svg';
import './login.css';

const Login = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('clickkkk');
        props.history.push('/dashboard');


    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='center'>
                    <img src={logo} alt='logo' className='logo-login' />
                    <p className='title'>Data Lovers</p>

                </div>
                <div className='boxes center'>
                    <form onSubmit={handleSubmit}>
                        <input placeholder='Usuario' className='col s10 box' />
                        <input placeholder='Contraseña' className='col s10 box ' />
                        <button className='btn-login col s10'>Entrar</button>
                    </form>
                    <p className='register col s10'>Registrame</p>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Login);
