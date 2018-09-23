const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'andrew',
            age: 26
        });
        // reject('Nope!')
    }, 3000);
});

promise.then((data) => {
    console.log(data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise'); 
        }, 5000);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('Error: ', error);
});