import { Router, Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import ControllerInterface from './ControllerInterface';
import tasksService from '../services/tasksService';
import logger from '../utils/logger';

@autoInjectable()
export default class TasksController implements ControllerInterface {
    router: Router;
    tasksService: tasksService;

    constructor(tasksService: tasksService) {
        this.tasksService = tasksService;
        this.router = Router();
    }

    routes() {
        this.router.post('/', async (req: Request, res: Response) => { 
            try {
                if (await this.tasksService.create(req.body) === true) return res.sendStatus(201);
                return res.sendStatus(400);
            } catch (error) {
                logger.error(error);
                return res.sendStatus(400);
            }
        })

        this.router.delete('/:id', async (req: Request, res: Response) => {
            try {
                if(await this.tasksService.delete(req.params.id) === true) return res.sendStatus(200);
                return res.sendStatus(400);
            } catch (error) {
                logger.error(error);
                return res.sendStatus(400);
            }
        })

        this.router.get('/:ownerId', async (req: Request, res: Response) => { 
            const task = await this.tasksService.getByOwnerId(req.params.ownerId);
            if (task?.length === 0) return res.sendStatus(404);
            return res.send(task);
        })

        this.router.patch('/:id', async (req: Request, res: Response) => {
            try {
                if (await this.tasksService.update(req.body, req.params.id)) return res.send(200);
                return res.send(400);
            } catch (error) {
                logger.error(error);
                return res.send(400);
            }
        })

        return this.router;
    }

}