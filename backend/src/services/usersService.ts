import usersRepository from "../repositories/usersRepository";
import logger from "../utils/logger";

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

}