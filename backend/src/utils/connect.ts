import mongoose from 'mongoose';
import logger from './logger';

async function connect() {
    try {
        await mongoose.connect(process.env.dbUri as string);
        logger.info(`DB is running at ${process.env.dbUri}`);
    } catch (e) {
        logger.error('could not connect to the database');
        process.exit(1);
    }
}

export default connect;