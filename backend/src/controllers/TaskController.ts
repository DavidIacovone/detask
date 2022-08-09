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
            }
        })

        this.router.get('/:name', async (req: Request, res: Response) => { 
            try {
                await this.tasksService.getByTitle(req.body);
                res.sendStatus(200);
            } catch (error) {
                logger.error(error);
            }
        })

        return this.router;
    }

}