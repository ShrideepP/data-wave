import React from "react";
import Masonry from "react-masonry-css";

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
      ></Masonry>
    </section>
  );
};

export default Home;
