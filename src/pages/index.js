import React from "react";
import "../styles/index.css";

import {
  ThemeProvider,
  createMuiTheme,
  Typography,
  Box,
} from "@material-ui/core";

import Layout from "../layouts/Layout";
import SpinningLogo from "../components/SpinningLogo";
import ChapterCard from "../components/ChapterCard";

import chapters from "../data/chapters.json";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Nunito", "Roboto", "Trebuchet MS"].join(","),
  },
});

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Box py={3} textAlign="center">
          <Typography variant="h3" component="h1">
            Welcome to React Lessons
          </Typography>
        </Box>
        <Box textAlign="center">
          <SpinningLogo />
        </Box>
        <Box display="grid" gridRowGap="16px">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.handle} chapter={chapter} />
          ))}
        </Box>
      </Layout>
    </ThemeProvider>
  );
};
