import React from 'react'

const Game = ({Game}) => {

    const {game, team, date, goals_local, goals_visitant, opponent, team_opponent} = Game;

    return (
        <div className="row">
            <div className="col-md-10 text-uppercase box-standard text-light ">
                <div className="row">
                    <div className="col-md-6">
                        <p className="font-weight-bold">game:&nbsp; <span className="font-weight-normal">{game}</span></p>
                    </div>
                    <div className="col-md-6">
                        <p className="font-weight-bold">date:&nbsp; <span className="font-weight-normal">{date}</span></p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <p className="font-weight-bold">goals_local:&nbsp; <span className="font-weight-normal">{goals_local}</span></p>
                        <p className="font-weight-bold">team:&nbsp; <span className="font-weight-normal">{team}</span></p>
                    </div>
                    <div className="col-md-6">
                        <p className="font-weight-bold">goals_visitant:&nbsp; <span className="font-weight-normal">{goals_visitant}</span></p>
                        <p className="font-weight-bold">opponent:&nbsp; <span className="font-weight-normal">{opponent}</span></p>
                        <p className="font-weight-bold">team_opponent:&nbsp; <span className="font-weight-normal">{team_opponent}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Game;