import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {

    const options = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
                dataLabels: {
                    position: 'top', // top, center, bottom
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
                colors: ["#304758"],
            },
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'top',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
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
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 5, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    }];

    return (
        <div className='bg-secondary dark:bg-dark-secondary border border-tirtiary dark:border-dark-tirtiary rounded-sm shadow-lg'>
            <div className='inner-space border-b border-tirtiary dark:border-dark-tirtiary'>
                <h2 className='text-sm text-dominant dark:text-dark-dominant font-semibold uppercase'>Bar Chart</h2>
            </div>
            <div className='inner-space'>
                <Chart options={options} series={series} type='bar' width='100%' />
            </div>
        </div>
    );

};

export default BarChart;