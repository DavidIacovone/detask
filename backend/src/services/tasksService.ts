import tasksRepository from "../repositories/tasksRepository";
import { autoInjectable } from "tsyringe";
import logger from "../utils/logger";

@autoInjectable()
export default class tasksService {
    private readonly tasksRepository: tasksRepository;

    constructor(tasksRepository: tasksRepository) {
        this.tasksRepository = tasksRepository;
    }

    async create(task: any): Promise<Boolean> {
        try {
            return await this.tasksRepository.save(task);
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async delete(id: any): Promise<Boolean> {
        try {
            return await this.tasksRepository.delete(id);
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async get(ownerId: String) {
        try {
            return await this.tasksRepository.get(ownerId);
        } catch (error) {
            logger.error(error);
        }
    }

    async update(task: any, id: any): Promise<Boolean> {
        try {
            return await this.tasksRepository.update(task, id);
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
}