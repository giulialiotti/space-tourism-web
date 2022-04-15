import * as React from "react";
import { Layout } from "layouts/index";

import { useTechnologyData, Header } from "sections/technologyPage";

const TechnologyPage = (props) => {
  const { technology } = useTechnologyData();

  return (
    <Layout props={props}>
      <Header data={technology} />
    </Layout>
  );
};

export default TechnologyPage;
