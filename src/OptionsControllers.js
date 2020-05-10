import React from 'react';

import { ButtonGroup, Button } from '@material-ui/core';

const OptionsControllers = ({ handleScoreUpdate, handleUndo, player }) => {
  return (
    <div>
      <ButtonGroup color="secondary">
        <Button onClick={() => handleUndo(player)}>Undo</Button>
        {/* <Button onClick={() => handleScoreUpdate(-100, player)}>-100</Button>
        <Button onClick={() => handleScoreUpdate(50, player)}>+50</Button>
        <Button onClick={() => handleScoreUpdate(100, player)}>+100</Button> */}
      </ButtonGroup>
    </div>
  );
};

export default OptionsControllers;
