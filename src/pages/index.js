import * as React from "react";

import { useHomePageData, Header } from "sections/homePage";

const IndexPage = () => {
  const { home } = useHomePageData();
  return (
    <>
      <Header data={home} />
    </>
  );
};

export default IndexPage;
