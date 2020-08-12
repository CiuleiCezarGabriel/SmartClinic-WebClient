export const AlertActionType = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
}

export function success(message) {
    return { type: SUCCESS, message }
}

export function error(message) {
    return { type: ERROR, message }
}

export function clear() {
    return { type: CLEAR }
} 