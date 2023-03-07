import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
    return (
        <div className='bg-secondary dark:bg-dark-secondary border border-tirtiary dark:border-dark-tirtiary rounded-sm shadow-lg'>
            <div className='inner-space border-b border-tirtiary dark:border-dark-tirtiary'>
                <h2 className='text-sm text-dominant dark:text-dark-dominant font-semibold uppercase'>Bar Chart</h2>
            </div>
            <div className='inner-space'></div>
        </div>
    );
};

export default BarChart;