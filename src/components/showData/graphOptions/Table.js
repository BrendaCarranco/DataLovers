import React from 'react';
import { Table } from 'react-materialize';
import './table.css';


const TableInfo = (props) => {
    return (
        <Table>
            <div className='container'>
                <div className=''>
                    <thead>
                        <tr className='block'>
                            <th data-field="id" className='bg'>Año</th>
                            <th data-field="name" className='bg'>Personas heridas</th>
                        </tr>
                    </thead>
                    <div className='table-1'>
                        <tbody>
                            {
                                props.dataArray.map(item => (
                                    <tr>
                                        <td className='align'>{item.year}</td>
                                        <td className='align'>{item.num}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </div>
                </div>
            </div>
        </Table>
    );
};

export default TableInfo;
