import React, {Fragment} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {getDifference} from '../actions/differenceAction';

const Difference = ({id_user}) => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const {win, lose, tied, goals, goals_against, status} = useSelector(state => state.differences.differences);

    const loadDifference = (id_user, id_opponent) => {
        dispatch(getDifference(id_user,id_opponent));
    }

    return (    
        <Fragment>
            <div className="row">
                <div className="col-md-12 text-light box-standard">
                    <div className="row d-flex justify-content-center align-item-center">
                        <div className="col-md-6 text-uppercase text-center p-3">
                            <p>Difference whit :</p>
                        </div>    
                        <div className="col-md-6 p-3">
                            <select class="form-control select-transparent" id="user" onChange={e => loadDifference(id_user, e.target.value)} required>
                            <option value=''>User</option>
                                {users.map(user => {
                                    if(user._id !== id_user){
                                        return (
                                            <option className="text-light" value={user._id}>{user.username}</option>
                                        )
                                    }
                                })}
                            </select>
                        </div>    
                                
                    </div>
                    <div className="row d-flex justify-content-center align-item-center">
                        <div className="col-md-6 text-uppercase text-center">
                            <p>Games</p>
                        </div> 
                    </div>
                    <div className="row">
                            <div className="col-8">
                                <p className="font-weight-bold">Win games:&nbsp; <span className="font-weight-normal">{win}</span></p>
                                <p className="font-weight-bold">Lost games:&nbsp; <span className="font-weight-normal">{lose}</span></p>
                                <p className="font-weight-bold">Tied games:&nbsp; <span className="font-weight-normal">{tied}</span></p>
                            </div>
                            <div className="col-4">
                                {(status == 'true') 
                                    ? <h2 className="p-2">{win - lose}</h2> 
                                    : <h2 className="p-2">-</h2> }
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center align-item-center">
                        <div className="col-md-6 text-uppercase text-center">
                            <p>Goals</p>
                        </div> 
                    </div>    
                        <div className="row">
                            <div className="col-8">
                                <p className="font-weight-bold">goals:&nbsp; <span className="font-weight-normal">{goals}</span></p>
                                <p className="font-weight-bold">goals against:&nbsp; <span className="font-weight-normal">{goals_against}</span></p>
                            </div>
                            <div className="col-4">
                                {(status == 'true') 
                                    ? <h2 className="p-2">{goals - goals_against}</h2> 
                                    : <h2 className="p-2"> - </h2>
                                }
                            </div>
                        </div>        
                                
                </div>
            </div>
        </Fragment>
    );
}
 
export default Difference;