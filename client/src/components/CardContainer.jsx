import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 component-gap">
      <Card title="Intensity" percentage="50%" />
      <Card title="Relevance" percentage="75%" />
      <Card title="Likelihood" percentage="100%" />
    </div>
  );
};

export default CardContainer;
