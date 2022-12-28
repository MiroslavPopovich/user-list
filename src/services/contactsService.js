const host = 'https://parseapi.back4app.com/classes';
const applicationId = 'vH1nC8PWxT5rpuSwEFecTkc6oVrUKwxHLxMmtq6u';
const restApiKey = '5TgCsI30MwrXrHwK0ZfYGGwFBtdYcSOqaQqOsFaL';

const endPoints ={
    all : '/People',
    byId: '/People/',
    add: '/People',
    edit: '/People/',
    delete: '/People/',
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

    if (data !== undefined){
        options.headers['Content-Type'] = 'application/json'; //tells the http what type of data we send
        options.body = JSON.stringify(data); // data must be object
    }

    // get const userData
    
    // if(userData !== null) {
    //     options.headers['X-Authorization'] = userData.token; // we create userData so the token must to save inuser Data.token 
    // }

    return options
};

async function get(url) { // GET request and returns promise
    return request(url, createOption());
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

export async function get_all() {
    return get(endPoints.all);// returns promise
};

export async function get_one(contactId){// id must be string
    return get(endPoints.byId + contactId)// returns promise
};

export async function add_one(userData){// item must be object
    return post(endPoints.add, userData)// returns promise
};

export async function edit_one(updatedUserData, contactId){// updatedItem must be object
    return put(endPoints.edit + contactId, updatedUserData)// returns promise
};

export async function delete_one(contactId){// id must be string
    return del(endPoints.delete + contactId)// returns promise
};