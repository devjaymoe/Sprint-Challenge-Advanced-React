import React from 'react';

const PlayerCards = props => {
    console.log(props.players)
    return (
        <div className='player-cards' data-testid='players'>
            {props.players.map( player => (
                <div className='player' key={player.id} data-testid='player'> 
                    <h3>{player.name}</h3>
                    <p>{player.country}</p>
                </div>
            ))}
        </div>
    )
}

export default PlayerCards;