import {
    DOWNLOAD_USERNAME,
    DOWNLOAD_USERNAME_SUCCESS,
    DOWNLOAD_USERNAME_ERROR,

    DOWNLOAD_USER_GAMES,
    DOWNLOAD_USER_GAMES_SUCCESS,
    DOWNLOAD_USER_GAMES_ERROR
}from '../types';

const initialState = {
    username: '',
    games: [],
    error_user: null,
    error_games: null
}

export default function (state = initialState, action) {
    switch(action.type) {
        case DOWNLOAD_USERNAME: 
            return {
                ...state,
                error_user: null
            }
        case DOWNLOAD_USERNAME_SUCCESS: 
        return {
            ...state,
            username: action.payload,
            error_user: false
        }
        case DOWNLOAD_USERNAME_ERROR: 
        return {
            ...state,
            error_user: true
        }
        case DOWNLOAD_USER_GAMES: 
        return {
            ...state,
            error_games: null
        }
        case DOWNLOAD_USER_GAMES_SUCCESS: 
        return {
            ...state,
            games: action.payload,
            error_games: false
        }
        case DOWNLOAD_USER_GAMES_ERROR: 
        return {
            ...state,
            error_games: true
        }
        default :
        return state
    }
}