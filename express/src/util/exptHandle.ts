import { NextFunction } from "express";

export const errorHandler = 
    (func: (req: Request, res: Response, next: NextFunction) => Promise<void>) => 
        (req: Request, res: Response, next: NextFunction) => func(req, res, next).catch(next);