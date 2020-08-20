import { createBrowserHistory } from 'history';

export function responseToJson(response) {
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
    });
}

export function globalErrorHandler(error) {
    if (error && error.message)
        alert(error.message);
    else
        alert('An error occured!');

    return Promise.reject(false);
}

export const history = createBrowserHistory()