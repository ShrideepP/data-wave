import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ThemeContext } from '../context/ThemeContext';
import { FilterContext } from '../context/FilterContext';

const AreaChart = () => {

    const { theme } = ThemeContext();
    const { selected3, donut } = FilterContext();

    const [topic, setTopic] = useState([]);
    const [relevance, setRelevance] = useState([]);

    const dominant = theme === 'light' ? "#0F172A" : "#F0F3FA";
    const compliment = theme === 'light' ? "#1E293B" : "#D6DEEA";

    useEffect(() => {
        setTopic(donut.map(item => item.topic));
        setRelevance(donut.reduce((acc, curr) => {
            const existing = acc.find(item => item.topic === curr.topic);
            if (existing) {
                existing.relevance += curr.relevance;
            } else {
                acc.push({ topic: curr.topic, relevance: curr.relevance });
            };
            return acc;
        }, []));
    }, [donut]);

    const options = {
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true,
            },
            toolbar: {
                show: false
            },
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
        xaxis: {
            categories: topic.length ? topic.filter((item, index) => topic.indexOf(item) === index) : ['export', 'growth', 'oil', 'gas', 'fracking'],
            labels: {
                show: true,
                style: {
                    colors: new Array(100).fill(dominant),
                    fontSize: '12px',
                },
            },
        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val) {
                    return (val / 1000000).toFixed(0)
                },
            },
        },
    };

    const series = [{
        name: selected3,
        data: relevance.length ? [...relevance.map(item => item.relevance)] : [45, 69, 30, 20, 45],
    }];

    return (
        <div className='bg-secondary dark:bg-dark-secondary border border-tirtiary dark:border-dark-tirtiary rounded-sm shadow-lg'>
            <div className='inner-space border-b border-tirtiary dark:border-dark-tirtiary'>
                <h2 className='text-xs text-dominant dark:text-dark-dominant font-semibold tracking-wider uppercase'>
                    Topic Relevance in {selected3}
                </h2>
            </div>
            <div>
                <Chart series={series} options={options} type="area" width="100%" height={300} />
            </div>
        </div>
    );

};

export default AreaChart;