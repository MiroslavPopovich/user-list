const baseURL = 'https://parseapi.back4app.com/classes/People';


export const get_all = async () => {
    const response = await fetch(`${baseURL}`, {
        method: 'GET', 
        headers: {
            'X-Parse-Application-Id': 'vH1nC8PWxT5rpuSwEFecTkc6oVrUKwxHLxMmtq6u',
            'X-Parse-REST-API-Key': '5TgCsI30MwrXrHwK0ZfYGGwFBtdYcSOqaQqOsFaL',
         },
        });
        const result = await response.json();
        return result;
};

export const get_one = async (contactId) => {
    const response = await fetch(`${baseURL}/${contactId}`, {
        method: 'GET', 
        headers: {
            'X-Parse-Application-Id': 'vH1nC8PWxT5rpuSwEFecTkc6oVrUKwxHLxMmtq6u',
            'X-Parse-REST-API-Key': '5TgCsI30MwrXrHwK0ZfYGGwFBtdYcSOqaQqOsFaL',
         },
        });
        const result = await response.json();
        return result;
};

export const add_one = async (userData) => {
    
    const response = await fetch(`${baseURL}`, {
        method: 'POST', 
        headers: {
            'X-Parse-Application-Id': 'vH1nC8PWxT5rpuSwEFecTkc6oVrUKwxHLxMmtq6u',
            'X-Parse-REST-API-Key': '5TgCsI30MwrXrHwK0ZfYGGwFBtdYcSOqaQqOsFaL',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(userData),
        });
    const result = await response.json();
    return result;
};

export const edit_one = async (userData, contactId) => {
    
    const response = await fetch(`${baseURL}/${contactId}`, {
        method: 'PUT', 
        headers: {
            'X-Parse-Application-Id': 'vH1nC8PWxT5rpuSwEFecTkc6oVrUKwxHLxMmtq6u',
            'X-Parse-REST-API-Key': '5TgCsI30MwrXrHwK0ZfYGGwFBtdYcSOqaQqOsFaL',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(userData),
        });
    const result = await response.json();
    return result;
};

export const delete_one = async (contactId) => {
    const response = await fetch(`${baseURL}/${contactId}`, {
        method: 'DELETE', 
        headers: {
            'X-Parse-Application-Id': 'vH1nC8PWxT5rpuSwEFecTkc6oVrUKwxHLxMmtq6u',
            'X-Parse-REST-API-Key': '5TgCsI30MwrXrHwK0ZfYGGwFBtdYcSOqaQqOsFaL',
         },
        });
        const result = await response.json();
        return result;
};