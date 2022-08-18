import express from 'express';
import dotenv from 'dotenv';
import 'reflect-metadata';
import { container } from "tsyringe";
import bodyParser from 'body-parser';
import logger from './utils/logger';
import connect from './utils/connect';
import TaskController from './controllers/TaskController';
import { taskSchema } from './schemas/taskSchema';
import { validateRequest } from './middlewares/validationMiddleware';

// environment 
const app = express();
dotenv.config();

//middleware
app.use(bodyParser.json());

//dependency container
const taskController = container.resolve(TaskController);

//routes
app.use('/api/tasks', taskSchema, validateRequest, taskController.routes());


app.listen(process.env.port, async () => {
    logger.info(`server is running at http://localhost:${process.env.port}`);
    await connect();
});