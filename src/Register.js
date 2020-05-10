import React, { useState } from 'react';

import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '2rem',
  },
}));

const Register = ({ startGame }) => {
  const classes = useStyles();
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  return (
    <div className="register-container">
      <TextField
        classes={{ root: classes.root }}
        onChange={(e) => setPlayer1(e.target.value)}
        label="Player 1"
        variant="outlined"
      />
      <TextField
        classes={{ root: classes.root }}
        onChange={(e) => setPlayer2(e.target.value)}
        label="player 2"
        variant="outlined"
      />
      <Button
        onClick={() => {
          startGame(player1, player2);
        }}
        variant="contained"
        color="secondary"
      >
        Submit
      </Button>
    </div>
  );
};

export default Register;
