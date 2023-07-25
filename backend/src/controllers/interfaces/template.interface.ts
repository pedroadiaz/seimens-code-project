import { NextFunction, Request, Response } from "express";

export interface ITemplateController {
    getTemplates(req: Request, res: Response): void;
}