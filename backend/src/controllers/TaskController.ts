import { Router, Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export default class TaskController {
    router: Router;

    constructor() {
        this.router = Router();
    }

    routes() {
        this.router.get('/:name', (req: Request, res: Response) => { res.send("hello tasks"); })

        return this.router;
    }

}