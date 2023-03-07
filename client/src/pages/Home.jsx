import React from "react";
import Masonry from "react-masonry-css";
import CardsContainer from '../components/CardsContainer';
import LineChart from "../components/LineChart";
import BarChart from '../components/BarChart';
import DonutChart from '../components/Donut';

const Home = () => {

    const breakpoints = {
        default: 2,
        768: 1,
    };

    return (
        <section className="w-full h-fit vertical-space horizontal-space">
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
                <CardsContainer />
                <LineChart />
                <BarChart />
                <DonutChart />
            </Masonry>
        </section>
    );
    
};

export default Home;
