import React, { useState, useEffect } from 'react';
import Card from './Card';
import { FilterContext } from '../context/FilterContext';

const CardsContainer = () => {

    const { bar, line, donut } = FilterContext();

    const [intensity, setIntensity] = useState([]);
    const [bucket1, setBucket1] = useState([]);
    const [totalIntensity, setTotalIntensity] = useState(0);
    
    const [likelihood, setLikelihood] = useState([]);
    const [bucket2, setBucket2] = useState([]);
    const [highestLikelihood, setHighestLikelihood] = useState(0);
    
    const [relevence, setRelevence] = useState([]);
    const [bucket3, setBucket3] = useState([]);
    const [highestRelevence, setHighestRelevence] = useState(0);

    useEffect(() => {

        setIntensity(bar.reduce((acc, curr) => {
            const existing = acc.find(item => item.sector === curr.sector);
            if (existing) {
                existing.intensity += curr.intensity;
            } else {
                acc.push({ sector: curr.sector, intensity: curr.intensity });
            };
            return acc;
        }, []));
        
        setBucket1(intensity.map(item => item.intensity));

        setTotalIntensity(bucket1.reduce((acc, curr) => {
            return acc + curr;
        }, 0));

        setLikelihood(line.reduce((acc, curr) => {
            const existing = acc.find(item => item.end_year === curr.end_year);
            if (existing) {
                existing.likelihood += curr.likelihood;
            } else {
                acc.push({ end_year: curr.end_year, likelihood: curr.likelihood });
            }
            return acc;
        }, []));

        setBucket2(likelihood.map(item => item.likelihood));

        setHighestLikelihood(Math.max(...bucket1));

        setRelevence(donut.reduce((acc, curr) => {
            const existing = acc.find(item => item.topic === curr.topic);
            if (existing) {
                existing.relevance += curr.relevance;
            } else {
                acc.push({ topic: curr.topic, relevance: curr.relevance });
            };
            return acc;
        }, []));

        setBucket2(relevence.map(item => item.relevance));

        setHighestRelevence(Math.max(...bucket2));

    }, [bar, line, donut]);

    return (
        <div className='w-full grid grid-cols-3 component-gap'>
            <Card title="Total Intensity" percentage={totalIntensity > 0 ? totalIntensity : 175} />
            <Card title="Highest Likelihood" percentage={highestLikelihood > 0 ? highestLikelihood : 60} />
            <Card title="Highest Relevance" percentage={highestRelevence > 0 ? highestRelevence : 69} />
        </div>
    );

};

export default CardsContainer;