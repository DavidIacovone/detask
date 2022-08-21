import { Router, Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import usersService from '../services/usersService';
import logger from '../utils/logger';
import ControllerInterface from './ControllerInterface';

@autoInjectable()
export default class UsersController implements ControllerInterface {
    router: Router;
    private readonly usersService: usersService;

    constructor(usersService: usersService) {
        this.usersService = usersService;
        this.router = Router();
    }

    routes() {
        this.router.get('/:id', async (req: Request, res: Response) => {
            try {
                const user = await this.usersService.get(req.params.id);
                if (!user === null) return res.send(user);
                return res.sendStatus(404);
            } catch (error) {
                logger.error(error);
            }
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