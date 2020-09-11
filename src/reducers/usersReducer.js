import { UserActionTypes } from '../actions/userActions'

const usersInitialState = {
    loadingUsers: false,
    data: [],
    user: []
}

export function users(state = usersInitialState, action) {
    switch (action.type) {
        case UserActionTypes.GETALL_REQUEST:
            return { ...state, loadingUsers: true }
        case UserActionTypes.GETALL_SUCCESS:
            console.log(action)
            return { ...state, data: action.users, loadingUsers: false }
        case UserActionTypes.GETALL_FAILURE:
            return { ...state, data: [], loadingUsers: false }

        case UserActionTypes.DELETE_REQUEST:
            return { ...state, loadingUsers: true }
        case UserActionTypes.DELETE_SUCCESS:

            const userss = state.data.filter(it => it._id != action.user._id)
            return { ...state, data: userss, loadingUsers: false }
        case UserActionTypes.DELETE_FAILURE:
            return { ...state, data: [], loadingUsers: false }
    }
    return state;
}

