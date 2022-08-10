import { Router, Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import tasksService from '../services/tasksService';
import logger from '../utils/logger';

@autoInjectable()
export default class TaskController {
    router: Router;
    tasksService: tasksService;

    constructor(tasksService: tasksService) {
        this.tasksService = tasksService;
        this.router = Router();
    }

    routes() {
        this.router.post('/:name', async (req: Request, res: Response) => { 
            try {
                await this.tasksService.create(req.body);
                res.sendStatus(201);
            } catch (error) {
                logger.error(error);
                res.sendStatus(400);
            }
        })

        this.router.get('/:name', async (req: Request, res: Response) => { 
            const task = await this.tasksService.getByTitle(req.body.title);
            if (task?.length === 0) res.sendStatus(404);
            res.send(task);
        })

        return this.router;
    }

}