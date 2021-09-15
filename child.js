class ChildClass {
    constructor() {
        this.messageQueue = [];
        this.intervalId = setInterval(this.processNextInQueue.bind(this), 500)
    }

    handleMessage(msg) {
        this.messageQueue.push(msg)
    }

    processNextInQueue() {
        console.log('next in queue');
        console.log(this.messageQueue.splice(0, 1))
    }
}

const handler = new ChildClass();

process.on('message', handler.handleMessage.bind(handler));
