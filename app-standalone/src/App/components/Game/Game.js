import React, { useEffect, useState } from "react";
import Board from "../Board/Board";
import GameResults from "../GameResults/GameResults";
import "./Game.css";

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
    const [gameHistory, setGameHistory] = useState([{ squares: Array(9).fill(null) }]); // Start of game
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const [wins, setWins] = useState([]); // track our wins
    let winningSquares = []; //records the squares the game is won on
    
    
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                winningSquares = [a, b, c]
                if (squares[a] === 'O') {
                    return 'Y'
                } 
                return 'X';
            }
        }

        return null;
    };

    const handleClick = (i) => {
        const history = gameHistory.slice(0, stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = xIsNext ? "X" : "O";

        setGameHistory([...history, { squares }]);
        setStepNumber(history.length);

        setXisNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const playAgain = () => {
        setGameHistory([{ squares: Array(9).fill(null) }]);
        setStepNumber(0);
        setXisNext(true);
      }

    const current = gameHistory[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = gameHistory.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });


    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "Y");
    }

    useEffect(() => { // increases x or y win count for scoreboard
        if(winner === 'Y') setWins((prev) => [...prev, 'Y'])
         if(winner === 'X') setWins((prev) => [...prev, 'X'])
    }, [winner])

    return (
        <div className="game">
            <div className="game-board">
                
                <Board
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                    winningSquares={winningSquares}
                />
                <div>
                {/* Adding in the 'play again' button */}
                <button className="play-again" onClick={playAgain}>Play Again</button>
              </div>
            </div>

            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
                
            </div>
            
             <GameResults wins={wins} />
        </div>
    );
};

export default Game;