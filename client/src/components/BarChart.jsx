import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ThemeContext } from '../context/ThemeContext';
import { FilterContext } from '../context/FilterContext';

const BarChart = () => {

    const { theme } = ThemeContext();
    const { selected1, bar } = FilterContext();

    const [sector, setSector] = useState([]);
    const [intensity, setIntensity] = useState([]);

    useEffect(() => {
        setSector(bar.map(item => item.sector));
        setIntensity(bar.reduce((acc, curr) => {
            const existing = acc.find(item => item.sector === curr.sector);
            if (existing) {
                existing.intensity += curr.intensity;
            } else {
                acc.push({ sector: curr.sector, intensity: curr.intensity });
            }
            return acc;
        }, []));
    }, [bar]);
       
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
            categories: sector.length ? sector.filter((item, index) => sector.indexOf(item) === index) : ['Retail', 'Manufacturing', 'Financial services', 'Energy', 'Environment',],
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
        data: intensity.length ? [...intensity.map(item => item.intensity)] : [10, 30, 55, 20, 60],
    }];

    return (
        <div className='bg-secondary dark:bg-dark-secondary border border-tirtiary dark:border-dark-tirtiary rounded-sm shadow-lg'>
            <div className='inner-space border-b border-tirtiary dark:border-dark-tirtiary'>
                <h2 className='text-xs text-dominant dark:text-dark-dominant font-semibold tracking-wider uppercase'>
                    Sector Intensity in {selected1}
                </h2>
            </div>
            <div>
                <Chart options={options} series={series} type='bar' width='100%' />
            </div>
        </div>
    );

};

export default BarChart;