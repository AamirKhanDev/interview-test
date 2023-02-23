import React from "react";
import PropTypes from 'prop-types';
import './GameResults.css';

const GameResults = ({ wins }) => { 

  const justEndIt = () => {
    if (wins.length === 9) {
    alert("I think you've played enough.  Let's call it a day.")
    }
    }

  return (
    <>
      <div className='gameScore'>
        <h3>Game Score</h3>
        
      <div>
        <p className="playerXWins">Player X has {wins.filter(z => z === 'X').length} wins</p>
        <p className="playerYWins">Player Y has {wins.filter(z => z === 'Y').length} wins</p>
      </div>
      </div>

      <div className="gameHistory">
        <h3>Game History</h3>
        
        <div>
            {wins.map((player, number) => {
                return <p className='gameWins' key={number}>Game {number + 1}: Winner {player}</p>;
            })}
      </div>
      {justEndIt()}
      </div>
        </>
       )
    
};
GameResults.propTypes = {
     /**
     *  array of won games
     */
  wins: PropTypes.array.isRequired,
};

export default GameResults;