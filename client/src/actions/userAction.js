import {
    DOWNLOAD_USERNAME,
    DOWNLOAD_USERNAME_SUCCESS,
    DOWNLOAD_USERNAME_ERROR,

    DOWNLOAD_USER_GAMES,
    DOWNLOAD_USER_GAMES_SUCCESS,
    DOWNLOAD_USER_GAMES_ERROR
}from '../types';

import clientAxios from '../config/axios';

// USERNAME
export function getUsername(id) {
    return dispatch => {
        dispatch(downloadUsername())
        clientAxios.get(`/user/${id}`)
            .then(res => {
                dispatch(downloadUsernameSuccess(res.data.user.username))
            })
            .catch(err => {
                dispatch(downloadUsernameError())
            })
    }
}

export const downloadUsername = () => ({
    type: DOWNLOAD_USERNAME
})

export const downloadUsernameSuccess = name => ({
    type: DOWNLOAD_USERNAME_SUCCESS,
    payload: name,
})

export const downloadUsernameError = () => ({
    type: DOWNLOAD_USERNAME_ERROR
})

//GAMES 

export function getGames(id) {
    return dispatch => {
        dispatch(downloadGames())
        clientAxios.get(`/user/${id}/games`)
            .then(res => {
                console.log(res)
                if(res.data.status == 'true'){ // if the state is true, is becouse there are games
                    
                    dispatch(downloadGamesSuccess(res.data.games))
                }else { // else send null at the games of the state of the user
                    dispatch(downloadGamesSuccess(null))
                }
            })
            .catch(err => {
                dispatch(downloadGamesError())
            })
    }
}

export const downloadGames = () => ({
    type: DOWNLOAD_USER_GAMES
})

export const downloadGamesSuccess = games => ({
    type: DOWNLOAD_USER_GAMES_SUCCESS,
    payload: games,
})

export const downloadGamesError = () => ({
    type: DOWNLOAD_USER_GAMES_ERROR
})