import { Router, Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import logger from '../utils/logger';
import ControllerInterface from './ControllerInterface';

@autoInjectable()
export default class UsersController implements ControllerInterface {
    router: Router;

    constructor() {
        this.router = Router();
    }

    routes() {
        this.router.get('/:id', (req: Request, res: Response) => {

        });

        this.router.post('/', (req: Request, res: Response) => {

        });

        this.router.delete('/:id', (req: Request, res: Response) => {

        });

        this.router.patch('/:id', (req: Request, res: Response) => {

        });

        return this.router;
    }
}