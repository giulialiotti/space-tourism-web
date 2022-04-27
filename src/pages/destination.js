import * as React from "react";

import { useDestinationPageData, Header } from "sections/destinationPage";

const DestinationPage = () => {
  const { destinations } = useDestinationPageData();
  return (
    <>
      <Header data={destinations} />
    </>
  );
};

export default DestinationPage;
