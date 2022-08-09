import Task from '../models/taskModel';

export default class tasksRepository {

    async save(task: any) {
        try {
            await Task.create(task);
            console.log(task);
        } catch (error) {
            console.log(error);
        }
    }

    async getByTitle(title: String) {
        
    }
}