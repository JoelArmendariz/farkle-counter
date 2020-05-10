import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    lineHeight: 1.5,
  },
}));

const Rules = ({ handleScoreUpdate, player }) => {
  const classes = useStyles();
  return (
    <div>
      <div className="rules-body">
        <Typography classes={{ root: classes.root }} variant="overline">
          Single 1 = 100
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          Single 5 = 50
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          Three 1’s = 300
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          Three 2’s = 200
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          Three 3’s = 300
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          Three 4’s = 400
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          Three 5’s = 500
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          Three 6’s = 600
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          Four of any number = 1,000
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          Five of any number = 2,000
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          Six of any number = 3,000
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          1-6 straight = 1,500
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          Three pairs = 1,500
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          Four of any number with a pair = 1,500
        </Typography>
        <Typography classes={{ root: classes.root }} variant="overline">
          Two triplets = 2,500
        </Typography>
      </div>
    </div>
  );
};

export default Rules;
