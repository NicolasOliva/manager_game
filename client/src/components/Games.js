import React, {useEffect, Fragment} from 'react';

import {useDispatch,useSelector} from 'react-redux';
import {getGames} from '../actions/gamesAction';
import Game from './Game';

const Games = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGames())
    }, [])

    const games = useSelector(state => state.games.games),
          error = useSelector(state => state.games.error)

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-12 my-5">
                    <h3>Games</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    {(error) ? <div> Hubo un error al cargar los partidos</div> : null}
                    {games.map(game => (
                                <Game key = {game._id}
                                       Game = {game}
                                />
                    ))}
                </div>
            </div>
        </Fragment>
    );
}
 
export default Games;