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
/* It then checks whether the value of squares at index a is truthy (i.e., not null, undefined, or false) and whether it 
is equal to the value of squares at indices b and c. If this condition is true, it sets the winningSquares 
variable to an array containing the indices a, b, and c. */


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
        if(winner === 'Y') setWins((prev) => [...prev, 'Y']) /*the effect hook listens for changes to the winner variable. If the winner variable is equal to 'Y', 
        it updates the wins array by appending the string 'Y' to the end of the array. This is done using the setWins() function, which is a state update function for the 
        wins state variable. The setWins() function takes a function that receives the previous state value and returns the new state value, which is an array containing 
        all the previous values from the wins state array plus the new value 'Y'. This is done using the spread operator ... to copy the previous state array. */
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