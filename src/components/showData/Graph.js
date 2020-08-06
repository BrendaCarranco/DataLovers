import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import data from '../../data/injuries/injuries';
import './graph.css';

import SelectYear from './Select';
import TableInfo from './graphOptions/Table';
import Lineal from './graphOptions/Lineal';
import Map from './graphOptions/Map';

const Graph = ({ pic, history, medio }) => {

    let array = [];

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [dataArray, setDataArray] = useState([]);
    const [table, setTable] = useState(false);
    const [chart, setChart] = useState(false);
    const [map, setMap] = useState(false);

    const handleEmptyPic = () => {
        if (pic === '') {
            history.push('/dashboard');
        }
    };
    handleEmptyPic();

    const handleBack = () => {
        history.goBack();
    };

    const mapData = () => {
        data.map(item => {
            let dataObj = {
                year: parseInt(item.Year.split('_')[0]),
                num: item[medio]
            };
            if (from <= dataObj.year && dataObj.year <= to) {
                array.push(dataObj);
                //console.log(array); //aquí está uwu
                setDataArray(array);
            }
            return dataArray;
        });
    };

    console.log(dataArray, 'afuera'); //aquí estaaaaa en state

    const handleTable = () => {
        setTable(true);
        setChart(false);
        setMap(false);
        mapData();
    };

    const test = () => {
        setTable(false);
        setChart(true);
        setMap(false);
    };

    const handleMap = () => {
        setTable(false);
        setChart(false);
        setMap(true);
    };

    return (
        <div className='container'>
            <div className='row rw'>
                <span className="material-icons arrow" onClick={handleBack} >arrow_back_ios</span>
                <img src={pic} className='header-icon col 12 right' alt='pic' />
            </div>
            <div className='row'>
                <div className='select-year right'>
                    <span className='int'>Intervalo:</span>
                    <div className='select-1'>
                        <SelectYear className='select-box' id='from' setFrom={setFrom} />
                    </div>
                    <div className='select-1'>
                        <SelectYear className='select-box' id='to' setTo={setTo} /></div>
                </div>
                <button label='grafica' className='btn-1 select-graph' onClick={test} >grafica</button>
                <button label='tabla' className='btn-1 select-graph' onClick={handleTable} >tabla</button>
                <button label='mapa' className='btn-1 select-graph' onClick={handleMap} >mapa</button>
            </div>

            {
                table ? (<TableInfo dataArray={dataArray} />) : (null)
            }
            {
                chart ? (<Lineal dataArray={dataArray} />) : (null)
            }
            {
                map ? (<Map dataArray={dataArray} />) : (null)
            }


        </div>
    );
};

export default withRouter(Graph);

