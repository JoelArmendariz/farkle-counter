import React from 'react';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btnContainer: {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const GameButtons = ({ handleNewGame, handleRestart }) => {
  const classes = useStyles();
  return (
    <div className={classes.btnContainer}>
      <Button
        variant="outlined"
        classes={{ root: classes.root }}
        onClick={() => handleRestart()}
      >
        Restart Game
      </Button>
      <Button
        variant="outlined"
        classes={{ root: classes.root }}
        onClick={() => handleNewGame()}
      >
        New Game
      </Button>
    </div>
  );
};

export default GameButtons;
