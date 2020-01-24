import React from 'react'

const Game = ({Game}) => {

    const {date, local, visitant, team_local, team_visitant, goals_local, goals_visitant} = Game;

    return (
        <div className="row justify-content-center">
            <div className="col-md-10 text-uppercase box-standard text-light ">
                <div className="row">
                    <div className="col-md-6">
                        <p className="font-weight-bold">date:&nbsp; <span className="font-weight-normal">{date}</span></p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <p className="font-weight-bold">local:&nbsp; <span className="font-weight-normal">{local.username}</span></p>
                        <p className="font-weight-bold">goals_local:&nbsp; <span className="font-weight-normal">{goals_local}</span></p>
                        <p className="font-weight-bold">team_local:&nbsp; <span className="font-weight-normal">{team_local}</span></p>
                    </div>
                    <div className="col-md-6">
                        <p className="font-weight-bold">visitant:&nbsp; <span className="font-weight-normal">{visitant.username}</span></p>
                        <p className="font-weight-bold">goals_visitant:&nbsp; <span className="font-weight-normal">{goals_visitant}</span></p>
                        <p className="font-weight-bold">team_visitant:&nbsp; <span className="font-weight-normal">{team_visitant}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Game;