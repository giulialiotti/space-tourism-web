import * as React from "react";
import { Layout } from "layouts/index";

import { useDestinationPageData, Header } from "sections/destinationPage";

const DestinationPage = () => {
  const { destinations } = useDestinationPageData();
  return (
    <Layout>
      <Header data={destinations} />
    </Layout>
  );
};

export default DestinationPage;
