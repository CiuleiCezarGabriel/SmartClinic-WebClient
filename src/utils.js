import { createBrowserHistory } from 'history';

export function responseToJson(response) {
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
    });
} 

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}

export const history = createBrowserHistory()