import express from 'express';
import dotenv from 'dotenv';
import 'reflect-metadata';
import { container } from "tsyringe";
import bodyParser from 'body-parser';
import logger from './utils/logger';
import connect from './utils/connect';
import TasksController from './controllers/TaskController';
import { taskSchema } from './schemas/taskSchema';
import { validateRequest } from './middlewares/validationMiddleware';
import UsersController from './controllers/UsersController';

// environment 
const app = express();
dotenv.config();

//middleware
app.use(bodyParser.json());

//dependency container
const tasksController = container.resolve(TasksController);
const usersController = container.resolve(UsersController);

//routes
app.use('/api/tasks', taskSchema, validateRequest, tasksController.routes());
app.use('/api/users', usersController.routes());


app.listen(process.env.port, async () => {
    logger.info(`server is running at http://localhost:${process.env.port}`);
    await connect();
});