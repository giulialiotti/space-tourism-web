import * as React from "react";
import { Layout } from "layouts/index";

import { useCrewPageData, Header } from "sections/crewPage";

const CrewPage = () => {
  const { crew } = useCrewPageData();

  return (
    <Layout>
      <Header data={crew} />
    </Layout>
  );
};

export default CrewPage;
