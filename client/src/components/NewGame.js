import React, {useState, useEffect, Fragment} from 'react';

//redux
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../actions/usersAction';
import {getTeams} from '../actions/teamsAction';
import {newGame} from '../actions/gamesAction';

const NewGame = ({history}) => {

    const [goals_local, saveGoals1] = useState(0),
          [local, saveUser1] = useState(''),
          [team_local, saveTeam1] = useState(''),
          [goals_visitant, saveGoals2] = useState(0),
          [visitant, saveUser2] = useState(''),
          [team_visitant, saveTeam2] = useState(''),
          [place, savePlace] = useState('5ddaf50bd5ecfd3d95fd54df'); //for the moment predetermined
  
    const dispatch = useDispatch(),
          users = useSelector(state => state.users.users),
          teams = useSelector(state => state.teams.teams);
    
    useEffect(() => {
            dispatch(getUsers())
            dispatch(getTeams())
    },[]);

    const submitGame = e => {
        e.preventDefault();

        dispatch(newGame({
            goals_local,
            local,
            team_local,
            goals_visitant,
            visitant,
            team_visitant,
            place
        }));

        history.push('/')    

    }   

    return (
        <Fragment>
            <div className="row">
                <div className="col d-flex justify-content-center my-5">
                    <h3>New Game</h3>
                </div>
            </div>
            <div className="row">
                <div className="col text-uppercase text-light box-standard">
                        <form onSubmit={submitGame}>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-6 p-4">
                                    <div class="form-group d-flex justify-content-around">
                                        <label for="goals_local" className="col-sm-5 text-center col-form-label">Goals:</label>
                                        <div className="col-sm-6">
                                            <input type="number" className="form-control-plaintext text-light text-center" id="goals_local" value={goals_local} onChange={e => saveGoals1(e.target.value)} required></input>
                                        </div>
                                    </div>
                                    <div class="form-group d-flex justify-content-around">
                                        <label for="user" className="col-sm-5 text-center col-form-label">User:</label>
                                        <div className="col-sm-6">
                                            <select class="form-control select-transparent" id="user" onChange={e => saveUser1(e.target.value)} required>
                                            <option value=''>User</option>
                                                {users.map(user => (
                                                   <option value={user._id}>{user.username}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group d-flex justify-content-around">
                                        <label for="team" className="col-sm-5 text-center col-form-label">Team:</label>
                                        <div className="col-sm-6">
                                            <select class="form-control select-transparent" id="team" onChange={e => saveTeam1(e.target.value)} required>
                                                <option value=''>Team</option>
                                                {teams.map(team => (
                                                    <option value={team.name}>{team.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-md-6 p-4">
                                    <div class="form-group d-flex justify-content-around">
                                        <label for="goals_against" className="col-sm-5 text-center col-form-label">Goals against:</label>
                                        <div className="col-sm-6">
                                            <input type="number" className="form-control-plaintext text-light text-center" id="goals_against" value={goals_visitant} onChange={e => saveGoals2(e.target.value)} required></input>
                                        </div>
                                    </div>
                                    <div class="form-group d-flex justify-content-around">
                                        <label for="opponent" className="col-sm-5 text-center col-form-label">Opponent:</label>
                                        <div className="col-sm-6">
                                        <select class="form-control select-transparent" id="opponent" onChange={e => saveUser2(e.target.value)} required>
                                                <option value=''>User</option>
                                                {users.map(user => (
                                                   <option value={user._id}>{user.username}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group d-flex justify-content-around">
                                        <label for="team_opponent" className="col-sm-5 text-center col-form-label">Team opponent:</label>
                                        <div className="col-sm-6">
                                            <select class="form-control select-transparent" id="team_opponent" onChange={e => saveTeam2(e.target.value)} required>
                                                <option value=''>Team</option>
                                                {teams.map(team => (
                                                    <option value={team.name}>{team.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row d-flex justify-content-center my-2">
                                    <button type="submit" className="border-0 link-new-game">LOAD</button>
                            </div>
                        </form>
                </div>
            </div>
        </Fragment>
    );
}
 
export default NewGame;