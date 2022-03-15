import * as React from "react";
import { Layout } from "../layouts/index";

import { useHomePageData, Header } from "sections/homePage";

const IndexPage = () => {
  const { home } = useHomePageData();
  return (
    <Layout>
      <Header data={home} />
    </Layout>
  );
};

export default IndexPage;
