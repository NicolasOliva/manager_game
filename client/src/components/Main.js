import React, {useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom';

//redux
import {useDispatch,useSelector} from 'react-redux';
import {getUsers} from '../actions/usersAction';

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    },[])
    
    const users = useSelector(state => state.users.users),
          error = useSelector(state => state.users.error);

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-12 my-5">
                    <h3>Users</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                    <div className="col-md-6">
                        {(error) ? <div className="alert alert-danger text-center"> Hubo un error al cargar los usuarios</div> : null}
                        {users.map(user => (
                            <div className="row">
                                <div className="col text-center box-standard">
                                    <Link to={{pathname:'/user', state:{key: user._id, user} }}>
                                          <span className="info-span">{user.username}</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            
        </Fragment>
    );
}
 
export default Main;