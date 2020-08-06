import React, { useState } from 'react';
import TableInfo from './Table';
import { Table } from 'react-materialize';

import { Chart } from 'react-google-charts';


const Lineal = (props) => {

    const [a, setA] = useState();

    //console.log(props.dataArray, 'esye es map');

    let data = [
        { year: 1998, num: 15559 },
        { year: 1999, num: 21958 },
        { year: 2000, num: 17769 },
        { year: 2001, num: 15427 }
    ];

    const prueba = () => {
        data.map(item => {
            console.log(item, 'sknfsk');
            setA([item.year, item.num]);
        });
        //prueba();



    };

    return (
        <div>
            <button onClick={prueba} >hi</button>
            <Chart
                width={400}
                height={'300px'}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Year', 'Sales'],
                    [1, 2
                        /*            { year: 1996, num: 20291 },
                                   { year: 1997, num: 16887 },
                                   { year: 1998, num: 15559 },
                                   { year: 1999, num: 21958 },
                                   { year: 2000, num: 17769 },
                                   { year: 2001, num: 15427 },
                                   { year: 2002, num: 18819 } */
                    ]
                ]}
                options={{
                    title: 'Company Performance',
                    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                    vAxis: { minValue: 0 },
                    // For the legend to fit, we make the chart area smaller
                    chartArea: { width: '50%', height: '70%' },
                    // lineWidth: 25
                }}
            />
        </div>
    );
};

export default Lineal;



/*
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
 */