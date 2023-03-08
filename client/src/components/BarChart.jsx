import React from 'react';
import Chart from 'react-apexcharts';
import { ThemeContext } from '../context/ThemeContext';
import { FilterContext } from '../context/FilterContext';

const BarChart = () => {

    const { theme } = ThemeContext();
    const { bar } = FilterContext();
    
    const dominant = theme === 'light' ? "#0F172A" : "#F0F3FA";
    const compliment = theme === 'light' ? "#1E293B" : "#D6DEEA";
    
    const options = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            },
        },
        fill: {
            colors: ['#3b82f6']
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
                dataLabels: {
                    position: 'top',
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: [compliment],
            },
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: {
                show: true,
                style: {
                    colors: new Array(12).fill(dominant),
                    fontSize: '12px',
                },
            },
            position: 'bottom',
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    },
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + "%";
                },
            },
        },
    };
    
    const series = [{
        name: 'INTENSITY',
        data: [2.3, 3.1, 4.0, 5, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    }];

    return (
        <div className='bg-secondary dark:bg-dark-secondary border border-tirtiary dark:border-dark-tirtiary rounded-sm shadow-lg'>
            <div className='inner-space border-b border-tirtiary dark:border-dark-tirtiary'>
                <h2 className='text-xs text-dominant dark:text-dark-dominant font-semibold tracking-wider uppercase'>
                    Sector + Intensity = Country
                </h2>
            </div>
            <div>
                <Chart options={options} series={series} type='bar' width='100%' />
            </div>
        </div>
    );

};

export default BarChart;