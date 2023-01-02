export function getUserData() {
    return JSON.parse(sessionStorage.getItem('auth'));
}
window.getUserData = getUserData