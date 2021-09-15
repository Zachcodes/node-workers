const express = require('express');
const Manager = require('./childManager');
const app = express();

const myManager = new Manager();
for(let i = 0; i < 100; i++) {
    myManager.addToQueue('hello');
}

for(let i = 0; i < 1000000000; i++) {
    if(!(i % 10000000)) {
        console.log('ran a million')
    }
}

app.listen(5000, () => console.log('listening'))