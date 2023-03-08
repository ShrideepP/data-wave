import React from 'react';
import Chart from 'react-apexcharts';
import { FilterContext } from '../context/FilterContext';

const DonutChart = () => {

    const { donut } = FilterContext();

    const options = {
        chart: {
            type: 'donut',
        },
        labels: ['Apple', 'Mango', 'Grapes', 'Banana'],
        stroke: {
            width: 0,
        },
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        show: false
                    },
                },
            },
        },
    };

    const series = [44, 55, 41, 17, 15];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 component-gap'>
            <div className='bg-secondary dark:bg-dark-secondary border border-tirtiary dark:border-dark-tirtiary rounded-sm shadow-lg'>
                <div className='inner-space border-b border-tirtiary dark:border-dark-tirtiary'>
                    <h2 className='text-xs text-dominant dark:text-dark-dominant font-semibold tracking-wider uppercase'>
                        Topics + Relevance = Region
                    </h2>
                </div>
                <div className='inner-space flex justify-center'>
                    <Chart options={options} series={series} type="donut" width={300} />
                </div>
            </div>
        </div>
    );

};

export default DonutChart;