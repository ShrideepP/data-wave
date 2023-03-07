import React from "react";
import Masonry from "react-masonry-css";
import CardsContainer from "../components/CardsContainer";
import PolarArea from '../components/PolarArea';
import BarChart from '../components/BarChart';

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
                <PolarArea />
                <BarChart />
            </Masonry>
        </section>
    );
};

export default Home;
