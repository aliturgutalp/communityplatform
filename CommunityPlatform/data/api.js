import properties from "../Properties";

function doLogin(email, password) {
    return fetch(properties.APIURLs.login, {
        method: "POST",
        body: JSON.stringify({
            email,
            password
        }),
        headers: {'content-type': 'application/json'},
    });
}

export {
    doLogin
};