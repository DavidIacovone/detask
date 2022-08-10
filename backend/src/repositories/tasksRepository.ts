import Task from '../models/taskModel';
import logger from '../utils/logger';

export default class tasksRepository {

    async save(task: any): Promise<Boolean> {
        try {
            await Task.create(task);
            return true
        } catch (error) {
            logger.error(error)
            return false;
        }
    }

    async getByTitle(title: String) {
        try {
            const task: any[] = await Task.find({title: title});
            return task;
        } catch (error) {
            logger.error(error);
        }
    }
}