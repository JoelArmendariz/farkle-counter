import React from 'react';

import { ButtonGroup, Button } from '@material-ui/core';

const CommonRollControllers = ({ handleScoreUpdate, player }) => {
  return (
    <div className="roll-controllers-container">
      <ButtonGroup className="btn-group" size="small" color="secondary">
        <Button onClick={() => handleScoreUpdate(-500, player)}>-500</Button>
        <Button onClick={() => handleScoreUpdate(-100, player)}>-100</Button>
        <Button onClick={() => handleScoreUpdate(50, player)}>+50</Button>
        <Button onClick={() => handleScoreUpdate(100, player)}>+100</Button>
        <Button onClick={() => handleScoreUpdate(200, player)}>+200</Button>
        <Button onClick={() => handleScoreUpdate(300, player)}>+300</Button>
        <Button onClick={() => handleScoreUpdate(400, player)}>+400</Button>
      </ButtonGroup>
      <ButtonGroup className="btn-group" size="small" color="secondary">
        <Button onClick={() => handleScoreUpdate(500, player)}>+500</Button>
        <Button onClick={() => handleScoreUpdate(600, player)}>+600</Button>
        <Button onClick={() => handleScoreUpdate(1000, player)}>+1000</Button>
        <Button onClick={() => handleScoreUpdate(1500, player)}>+1500</Button>
        <Button onClick={() => handleScoreUpdate(2000, player)}>+2000</Button>
        <Button onClick={() => handleScoreUpdate(3000, player)}>+3000</Button>
      </ButtonGroup>
    </div>
  );
};

export default CommonRollControllers;
