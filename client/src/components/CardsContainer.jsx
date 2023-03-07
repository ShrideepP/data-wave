import React from 'react';
import Card from './Card';

const CardsContainer = () => {
    return (
        <div className='w-full grid-cols-1 grid md:grid-cols-2 component-gap'>
            <Card title="Likelihood" percentage="100%" />
            <Card title="Relevance" percentage="75%" />
            <Card title="Intensity" percentage="50%" />
        </div>
    );
};

export default CardsContainer;