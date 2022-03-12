import React from "react";

import { Navigation } from "../sections/navigation/Navigation";

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>
        <title>Space Tourism Web</title>
        {children}
      </main>
    </>
  );
};
