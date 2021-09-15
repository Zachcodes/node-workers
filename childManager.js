const { fork } = require('child_process');

class TestClass {
    constructor() {
        this.child = fork('./child.js', ['child'])
    }

    addToQueue(msg) {
        this.child.send(msg);
    }
}

module.exports = TestClass;