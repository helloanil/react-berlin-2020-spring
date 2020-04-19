import React from "react";

import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ChapterCardDetails from "./ChapterCardDetails";

const ChapterCard = ({ chapter }) => (
  <ExpansionPanel key={chapter.handle}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h5">{chapter.name}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <ChapterCardDetails
        handle={chapter.handle}
        exercises={chapter.exercises}
      />
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export default ChapterCard;
