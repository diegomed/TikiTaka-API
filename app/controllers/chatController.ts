class chatController {
    getHelloWorld(req: any, res: any): void {
        return res.send('Hello World!');
    }

    getClick(req: any, res: any): void {
        return res.send('Click!');
    }
    
    getDefault(req: any, res: any): void {
        return res.send('Home page!');
    }
}

const Controller = new chatController();
export default Controller;