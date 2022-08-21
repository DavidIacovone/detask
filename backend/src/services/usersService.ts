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
            await this.usersRepository.save(user);
            return true;
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

}