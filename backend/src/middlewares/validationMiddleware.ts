import { NextFunction, Request, Response } from "express";
import { validationResult } from 'express-validator';


export async function validateRequest(req: Request, res: Response, next: NextFunction) {
    const errors = await validationResult(req);
    if (!errors.isEmpty()) { return res.sendStatus(400).json({ errors: errors.array() }); }
    next();
}