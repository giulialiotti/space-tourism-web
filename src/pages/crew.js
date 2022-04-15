import * as React from "react";
import { Layout } from "layouts/index";

import { useCrewPageData, Header } from "sections/crewPage";

const CrewPage = (props) => {
  const { crew } = useCrewPageData();

  return (
    <Layout props={props}>
      <Header data={crew} />
    </Layout>
  );
};

export default CrewPage;
