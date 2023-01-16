
function get(url, callback) {
    var requestHeaders = new Headers();
    requestHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'GET',
        headers: requestHeaders
    };

    fetch(url, requestOptions)
        .then(response => response.json())
            .then(responseData => {

                console.log(responseData);    

                if (callback) {
                    callback(responseData);
                } 
            })
            .catch(error => callback(error));
}

function post(url, requestBody, callback) {
    var requestHeaders = new Headers();
    requestHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify(requestBody)
    };

    fetch(url, requestOptions)
        .then(response => response.json())
            .then(responseData => {

                console.log(responseData);    

                if (callback) {
                    callback(responseData);
                } 
            })
            .catch(error => callback(error));
}

function test(callback) {
    if(callback) {
        callback("From test");
    }
}

module.exports = {
    get,
    post
};