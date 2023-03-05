import React from "react";
import Masonry from "react-masonry-css";
import CardContainer from "../components/CardContainer";

const Home = () => {
  const breakpoints = {
    default: 2,
    768: 1,
  };

  return (
    <section className="w-full h-[80vh] vertical-space horizontal-space overflow-y-hidden">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <CardContainer />
      </Masonry>
    </section>
  );
};

export default Home;
