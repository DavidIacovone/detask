import express from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger';

const app = express();
dotenv.config();

app.listen(process.env.port, () => {
    logger.info(`server is running at http://localhost:${process.env.port}`);
});