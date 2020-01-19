import React,{useEffect, Fragment} from 'react';

import {useDispatch,useSelector} from 'react-redux';
import {getUsername,getGames} from '../actions/userAction';

import Difference from '../components/Difference';
import Game from '../components/Game';


const User = (props) => {
    
    const {user} = props.location.state;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUsername(user._id));
        dispatch(getGames(user._id));
    },[])
    
    const username = useSelector(state => state.user.username),
          games = useSelector(state => state.user.games),
          error_user = useSelector(state => state.user.error_user),
          error_games = useSelector(state => state.user.error_games);

    return (
        <Fragment>
                <div className="row">
                    <div className="col-md-12 mt-5 pt-5 d-flex">
                        <h1 className="text-light">User:</h1>
                            {(error_user) ? <span className="alert alert-danger text-center mx-5 px-5"> Hubo un error al cargar el nombre usuario </span> : <h1 className="text-light">&nbsp;{username}</h1>}
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-md-8 my-5 col-games">
                        <div className="row">
                            <div className="col-md-10">
                                <h3 className="subtittle-user">Games</h3>
                            </div>
                        </div>
                        {(error_games) ? <div className="alert alert-danger text-center"> Error loading user games </div> : null}
                        {games == null ? <div className="mt-3 alert alert-danger text-center">Has not games played</div> : 
                            games.map(game => (
                                <Game 
                                    key={game._id}
                                    Game={game}
                                />
                            ))
                        }
                    </div>
                    <div className="col-md-4 my-5">
                        <h3 className="subtittle-user">Differences:</h3>
                        <Difference
                            id_user={user._id}
                        />    
                    </div>
                </div>
        </Fragment>
    );
}
 
export default User;