import { autoInjectable } from "tsyringe";
import usersRepository from "../repositories/usersRepository";
import logger from "../utils/logger";

@autoInjectable()
export default class usersService {
    private readonly usersRepository: usersRepository;

    constructor(usersRepository: usersRepository) {
        this.usersRepository = usersRepository;
    }

    async get(id: any) {
        try {
            return await this.usersRepository.get(id);
        } catch (error) {
            logger.error(error);
        }
    }

    async create(user: any): Promise<Boolean> {
        try {
            return await this.usersRepository.save(user);
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async delete(id: any): Promise<Boolean> {
        try {
            return await this.usersRepository.delete(id);
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async update(user: any, id: any): Promise<Boolean> {
        try {
            return await this.usersRepository.update(user, id);
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

}