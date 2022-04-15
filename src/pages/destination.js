import * as React from "react";
import { Layout } from "layouts/index";

import { useDestinationPageData, Header } from "sections/destinationPage";

const DestinationPage = (props) => {
  const { destinations } = useDestinationPageData();
  return (
    <Layout props={props}>
      <Header data={destinations} />
    </Layout>
  );
};

export default DestinationPage;
