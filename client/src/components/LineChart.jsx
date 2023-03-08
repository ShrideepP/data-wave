import React from 'react';
import Chart from 'react-apexcharts';
import { ThemeContext } from '../context/ThemeContext';

const LineChart = () => {

    const { theme } = ThemeContext();
    
    const dominant = theme === 'light' ? "#0F172A" : "#F0F3FA";
    const compliment = theme === 'light' ? "#1E293B" : "#D6DEEA";

    const options = {
        chart: {
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            show: false
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            labels: {
                show: true,
                style: {
                    colors: new Array(12).fill(dominant),
                    fontSize: '12px',
                },
            },
        },
    };

    const series = [{
        name: "LIKELIHOOD",
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
    }];

    return (
        <div className='bg-secondary dark:bg-dark-secondary border border-tirtiary dark:border-dark-tirtiary rounded-sm shadow-lg'>
            <div className='inner-space border-b border-tirtiary dark:border-dark-tirtiary'>
                <h2 className='text-xs text-dominant dark:text-dark-dominant font-semibold tracking-wider uppercase'>
                    End Year + Likelihood = Sector
                </h2>
            </div>
            <div>
                <Chart options={options} series={series} type="line" width="100%" height={250} />
            </div>
        </div>
    );

};

export default LineChart;