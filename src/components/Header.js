import React from "react";

import { Box, Container, Typography } from "@material-ui/core";

const Header = () => (
  <header>
    <Box minHeight={60} bgcolor="#ffffff" py={2}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column">
          <Typography variant="h5" component="h1">
            ReDI - React
          </Typography>
          <Typography>Spring 2020</Typography>
        </Box>
      </Container>
    </Box>
  </header>
);

export default Header;
