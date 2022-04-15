import * as React from "react";
import { Layout } from "../layouts/index";

import { useHomePageData, Header } from "sections/homePage";

const IndexPage = (props) => {
  const { home } = useHomePageData();
  return (
    <Layout props={props}>
      <Header data={home} />
    </Layout>
  );
};

export default IndexPage;
