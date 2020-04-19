import React from "react";

import { Container } from "@material-ui/core";

import Header from "../components/Header";

export default ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <div>{children}</div>
      </Container>
    </>
  );
};
