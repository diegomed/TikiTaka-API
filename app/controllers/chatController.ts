import chat from '../model/chat/chat'

class chatController {
    getHelloWorld(req: any, res: any): void {
        return res.send(chat.helloWorld());
    }

    getClick(req: any, res: any): void {
        return res.send(chat.click());
    }
    
    getDefault(req: any, res: any): void {
        return res.send(chat.homepage());
    }
}

const Controller = new chatController();
export default Controller;