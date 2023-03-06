import React from 'react';

const Card = ({ title, percentage }) => {
    return (
        <div className='space-y-6 text-center inner-space bg-secondary dark:bg-dark-secondary border border-tirtiary dark:border-dark-tirtiary rounded-sm'>
            <div className="space-y-2">
                <h2 className='text-3xl text-dominant dark:text-dark-dominant font-semibold'>
                    {percentage}
                </h2>
                <hr className='w-10 h-[2px] mx-auto bg-accent border-0 rounded' />
            </div>
            <p className='text-xs text-dominant dark:text-dark-dominant font-medium tracking-wider uppercase'>
                {title}
            </p>
        </div>
    );
};

export default Card;