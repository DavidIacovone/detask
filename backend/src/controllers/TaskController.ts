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
        this.router.post('/', async (req: Request, res: Response) => { 
            try {
                if (await this.tasksService.create(req.body) === true) res.sendStatus(201);
                res.sendStatus(400);
            } catch (error) {
                logger.error(error);
                res.sendStatus(400);
            }
        })

        this.router.get('/:ownerId', async (req: Request, res: Response) => { 
            const task = await this.tasksService.getByOwnerId(req.params.ownerId);
            if (task?.length === 0) res.sendStatus(404);
            res.send(task);
        })

        return this.router;
    }

}