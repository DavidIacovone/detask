import User from '../models/userModel';
import logger from '../utils/logger';

export default class usersRepository {

    async save(user: any): Promise<Boolean> {
        try {
            await User.create(user);
            return true;
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async delete(id: any): Promise<Boolean> {
        try {
            await User.findByIdAndDelete(id);
            return true;
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async update(user: any, id: any): Promise<Boolean> {
        try {
            await User.findByIdAndUpdate(id, user);
            return true;
        } catch (error) {
            logger.error(error);
            return false;
        }
    }

    async get(id: any) {
        try {
            return await User.findById(id);
        } catch (error) {
            logger.error(error);
            return null;
        }
    }

    async getByEmail(email: any) {
        try {
            return await User.find({email: email});
        } catch (error) {
            logger.error(error);
            return null;
        }
    }
}