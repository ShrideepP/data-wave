import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { ThemeContext } from '../context/ThemeContext';
import { FilterContext } from '../context/FilterContext';

const LineChart = () => {

    const { theme } = ThemeContext();
    const { selected2, line } = FilterContext();
    const [endYear, setEndYear] = useState([]);
    const [likelihood, setLikelihood] = useState([]);

    useEffect(() => {
        setEndYear(line.map(item => item.end_year));
        setLikelihood(line.reduce((acc, curr) => {
            const existing = acc.find(item => item.end_year === curr.end_year);
            if (existing) {
                existing.likelihood += curr.likelihood;
            } else {
                acc.push({ end_year: curr.end_year, likelihood: curr.likelihood });
            }
            return acc;
        }, []));
    }, [line]);

    const dominant = theme === 'light' ? "#0F172A" : "#F0F3FA";

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
            categories: endYear.length ? endYear.filter((item, index) => endYear.indexOf(item) === index) : [2022, 2000, 2004, 2010, 2020],
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
        data: likelihood.length ? [...likelihood.map(item => item.likelihood)] : [15, 25, 60, 25, 55],
    }];

    return (
        <div className='bg-secondary dark:bg-dark-secondary border border-tirtiary dark:border-dark-tirtiary rounded-sm shadow-lg'>
            <div className='inner-space border-b border-tirtiary dark:border-dark-tirtiary'>
                <h2 className='text-xs text-dominant dark:text-dark-dominant font-semibold tracking-wider uppercase'>
                    End year likelihood in {selected2}
                </h2>
            </div>
            <div>
                <Chart options={options} series={series} type="line" width="100%" height={250} />
            </div>
        </div>
    );

};

export default LineChart;