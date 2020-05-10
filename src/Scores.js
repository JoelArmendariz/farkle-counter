import React from 'react';

import CommonRollControllers from './CommonRollControllers';
import OptionsControllers from './OptionsControllers';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}));

const Scores = ({ player1, player2, handleScoreUpdate, handleUndo }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography classes={{ root: classes.root }} variant="h5">
        {player1.name}: {player1.score}
      </Typography>
      <CommonRollControllers
        player={player1.name}
        handleScoreUpdate={handleScoreUpdate}
      />
      <OptionsControllers handleUndo={handleUndo} player={player1.name} />
      <Typography classes={{ root: classes.root }} variant="h5">
        {player2.name}: {player2.score}
      </Typography>
      <CommonRollControllers
        player={player2.name}
        handleScoreUpdate={handleScoreUpdate}
      />
      <OptionsControllers handleUndo={handleUndo} player={player2.name} />
    </div>
  );
};

export default Scores;
