import db from '../../db/db'

class chat {

    constructor() {}

    public helloWorld(): string {
        return 'Hello World!';
    }

    public click(): string {
        return 'Click!';
    }

    public homepage(): string {
        return 'Home Page!';
    }
}

const chatModel = new chat();
export default chatModel;