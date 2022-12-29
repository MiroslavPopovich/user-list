import { clearUserData, getUserData, setUserData } from "../services/util.js";
const host = 'https://parseapi.back4app.com';
const applicationId = 'vH1nC8PWxT5rpuSwEFecTkc6oVrUKwxHLxMmtq6u';
const restApiKey = '5TgCsI30MwrXrHwK0ZfYGGwFBtdYcSOqaQqOsFaL';

const endPoints ={
    all : '/classes/People',
    byId: '/classes/People/',
    add: '/classes/People',
    edit: '/classes/People/',
    delete: '/classes/People/',
    logIn: '/login',
    logOut: '/logout',
    register: '/users'
}

async function request(url, options){// returns promise
    try{
        const response = await fetch(host + url, options);

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;
    }catch(err){
        alert(err.message);
        throw err; // throws the error again so other fnc calling the request can get the error too
    }
};

function createOption(method = 'GET', data){ // if we don not choose any method it does get option/ data is object for the request body
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': applicationId,
            'X-Parse-REST-API-Key': restApiKey,
        }
    };

    const userData = getUserData();
    
    if(userData) {
        options.headers['X-Parse-Session-Token'] = userData.token; 
    }

    if (data !== undefined){
        options.headers['Content-Type'] = 'application/json'; 
        options.body = JSON.stringify(data); // data must be object
    }

    return options;
};

async function get(url, data) { // GET request and returns promise
    return request(url, createOption('GET', data));
};

async function post(url, data) { // POST request and returns promise
    return request(url, createOption('POST', data));
};

async function put(url, data) { // PUT request and returns promise
    return request(url, createOption('PUT', data));
};

async function del(url) { // DELETE request and returns promise
    return request(url, createOption('DELETE')); 
};
////////////////////////////////////////////////////////////////

export async function get_all() {
    return get(endPoints.all);// returns promise
};

export async function get_one(contactId){// id must be string
    return get(endPoints.byId + contactId)// returns promise
};

export async function add_one(contactData, ownerId){// item must be object
    contactData.ownerId = {
        __type: 'Pointer',
        className: '_User',
        objectId: ownerId
    };
    return post(endPoints.add, contactData)// returns promise
};

export async function edit_one(updatedContactData, contactId){// updatedItem must be object
    return put(endPoints.edit + contactId, updatedContactData)// returns promise
};

export async function delete_one(contactId){// id must be string
    return del(endPoints.delete + contactId)// returns promise
};

export async function login(username, password){
    const result = await post(endPoints.logIn, {username, password});

    const userData = {
        username: result.username,
        id: result.objectId,
        token: result.sessionToken 
    };
    
    setUserData(userData);
    return result;
};

export async function register(username, email, password){
    const result = await post(endPoints.register, {username, email, password});
    const userData = {
        username, 
        id: result.objectId,
        token: result.sessionToken 
    };
    setUserData(userData);
    return result
};

export async function logout(){
    await post(endPoints.logOut);
    clearUserData();
};