class ChildClass {
    constructor() {
        this.messageQueue = [];
        this.processNextInQueue();
    }

    handleMessage(msg) {
        this.messageQueue.push(msg)
    }

    processNextInQueue() {
        setTimeout(() => {
            this.messageQueue.map( message => {
                console.log('Message: ', message)
            })
        }, 300);
    }
}

const handler = new ChildClass();

process.on('message', handler.handleMessage.bind(handler));
