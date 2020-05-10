import React from 'react';
import './App.css';

import { Button } from '@material-ui/core';

import Register from './Register';
import Scores from './Scores';
import Rules from './Rules';
import GameButtons from './GameButtons';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
      player1: {
        name: '',
        score: 0,
        updates: [],
      },
      player2: {
        name: '',
        score: 0,
        updates: [],
      },
    };
    this.startGame = this.startGame.bind(this);
    this.handleScoreUpdate = this.handleScoreUpdate.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  startGame(player1, player2) {
    this.setState({
      player1: {
        name: player1,
        score: 0,
        updates: [],
      },
      player2: {
        name: player2,
        score: 0,
        updates: [],
      },
      isPlaying: true,
    });
  }

  handleScoreUpdate(roll, player) {
    const { player1, player2 } = this.state;
    if (player === player1.name) {
      const { score, updates } = player1;
      this.setState({
        player1: {
          ...player1,
          score: score + roll,
          updates: [...updates, roll],
        },
      });
    } else {
      const { score, updates } = player2;
      this.setState({
        player2: {
          ...player2,
          score: score + roll,
          updates: [...updates, roll],
        },
      });
    }
  }

  handleRestart() {
    const { player1, player2 } = this.state;
    this.setState({
      player1: {
        ...player1,
        updates: [],
        score: 0,
      },
      player2: {
        ...player2,
        updates: [],
        score: 0,
      },
    });
  }

  handleNewGame() {
    this.setState({
      player1: {
        name: '',
        updates: [],
        score: 0,
      },
      player2: {
        name: '',
        updates: [],
        score: 0,
      },
      isPlaying: false,
    });
  }

  handleUndo(player) {
    const { player1, player2 } = this.state;
    if (player === player1.name) {
      const { updates, score } = player1;
      const lastUpdate = -updates[updates.length - 1];
      this.setState({
        player1: {
          ...player1,
          score: score ? score + lastUpdate : score,
          updates: updates.slice(0, updates.length - 1),
        },
      });
    } else {
      const { updates, score } = player2;
      const lastUpdate = -updates[updates.length - 1];
      this.setState({
        player2: {
          ...player2,
          score: score ? score + lastUpdate : score,
          updates: updates.slice(0, updates.length - 1),
        },
      });
    }
  }

  render() {
    const { player1, player2, isPlaying } = this.state;
    return (
      <div className="App">
        {!isPlaying ? (
          <Register startGame={this.startGame} />
        ) : (
          <div className="game-container">
            <Scores
              handleScoreUpdate={this.handleScoreUpdate}
              handleUndo={this.handleUndo}
              player1={player1}
              player2={player2}
            />
            <GameButtons
              handleRestart={this.handleRestart}
              handleNewGame={this.handleNewGame}
            />
            <Rules />
          </div>
        )}
      </div>
    );
  }
}

export default App;
