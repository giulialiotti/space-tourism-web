import * as React from "react";
import { Layout } from "layouts/index";

import { useTechnologyData, Header } from "sections/technologyPage";

const TechnologyPage = () => {
  const { technology } = useTechnologyData();

  return (
    <Layout>
      <Header data={technology} />
    </Layout>
  );
};

export default TechnologyPage;
