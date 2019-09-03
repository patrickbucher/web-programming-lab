let promise = new Promise(function(resolve, reject) {
    reject(0);
    resolve(1);
});

function fail(message) {
    console.log('fail', message);
}

function ok(message) {
    console.log('ok', message);
}

promise.then(ok).catch(fail);
