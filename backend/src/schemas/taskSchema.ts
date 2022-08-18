import { body } from 'express-validator';

const schema = [
    body('title').isString(),
    body('isCompleted').isBoolean(),
    body('ownerId').isString()
]

export { schema as taskSchema }