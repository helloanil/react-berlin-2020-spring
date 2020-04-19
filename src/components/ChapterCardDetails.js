import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import CodeIcon from "@material-ui/icons/Code";

const ChapterCardDetails = ({ handle, exercises }) => {
  return (
    <List style={{ width: "100%" }}>
      <ListItem
        button
        divider={Boolean(exercises?.length)}
        onClick={() => navigate(`/slides/${handle}`)}
      >
        <ListItemIcon>
          <SlideshowIcon />
        </ListItemIcon>
        <ListItemText primary="Slides" />
      </ListItem>
      {exercises?.map((exercise) => (
        <ListItem key={exercise.name} button>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary={exercise.name} />
        </ListItem>
      ))}
    </List>
  );
};

ChapterCardDetails.defaultProps = {
  handle: "",
  exercises: [],
};

ChapterCardDetails.propTypes = {
  handle: PropTypes.string,
  exercises: PropTypes.array,
};

export default ChapterCardDetails;
