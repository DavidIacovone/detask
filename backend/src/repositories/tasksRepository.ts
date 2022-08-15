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

    async delete(id: any): Promise<Boolean> {
        try {
            await Task.findByIdAndDelete(id);
            return true;
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async getByOwnerId(ownerId: String) {
        try {
            const task: any[] = await Task.find({ownerId: ownerId});
            return task;
        } catch (error) {
            logger.error(error);
        }
    }

    async update(task: any, id: any): Promise<Boolean> {
        try {
            await Task.findByIdAndUpdate(id, task);
            return true;
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
}