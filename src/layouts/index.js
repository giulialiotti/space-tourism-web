import React from "react";

export const Layout = ({ children }) => {
  return (
    <>
      <nav></nav>
      <main>
        <title>Space Tourism Web</title>
        {children}
      </main>
    </>
  );
};
