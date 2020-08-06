import React, { Fragment } from 'react';
import './select.css';
import { Select } from 'react-materialize';
import data from '../../data/injuries/injuries';

const SelectYear = ({ id, setFrom, setTo }) => {

    const handleChange = e => {
        //console.log(id, e.target.value);
        if (id === 'to') {
            setTo(e.target.value);
        } if (id === 'from') {
            setFrom(e.target.value);
        }
    };

    return (
        <Fragment>
            <Select
                id="Select-9"
                multiple={false}
                onChange={handleChange}
                options={{
                    classes: '',
                    dropdownOptions: {
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }
                }}
            >
                <option>1960</option>
                <option>1965</option>
                <option>1970</option>
                <option>1975</option>
                <option>1980</option>
                <option>1985</option>
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                <option>1994</option>
                <option>1995</option>
                <option>1996</option>
                <option>1997</option>
                <option>1998</option>
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option >2015</option>
                <option>2016</option>
            </Select>
        </Fragment>);
};

export default SelectYear;


