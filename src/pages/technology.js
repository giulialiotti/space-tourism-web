import * as React from "react";

import { useTechnologyData, Header } from "sections/technologyPage";

const TechnologyPage = () => {
  const { technology } = useTechnologyData();
  return (
    <>
      <Header data={technology} />
    </>
  );
};

export default TechnologyPage;
