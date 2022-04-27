import * as React from "react";

import { useCrewPageData, Header } from "sections/crewPage";

const CrewPage = () => {
  const { crew } = useCrewPageData();
  return (
    <>
      <Header data={crew} />
    </>
  );
};

export default CrewPage;
