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

    async getByOwnerId(ownerId: String) {
        try {
            return await this.tasksRepository.getByOwnerId(ownerId);
        } catch (error) {
            logger.error(error);
        }
    }
}