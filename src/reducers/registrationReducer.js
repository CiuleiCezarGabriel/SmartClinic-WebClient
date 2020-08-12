import { UserActionTypes } from '../actions/userActions'

export function registration(state = {}, action) {
    switch (action.type) {
        case UserActionTypes.REGISTER_REQUEST:
            return { registering: true}
        case UserActionTypes.REGISTER_SUCCESS:
            return {}
        case UserActionTypes.REGISTER_FAILURE:
            return {}
        default:
            return state
    }
}