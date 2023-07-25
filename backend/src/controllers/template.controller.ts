import { Request, Response, NextFunction } from "express";
import { ITemplateController } from "./interfaces/template.interface";
import { inject, injectable } from "inversify";
import { Symbols } from "../utils/types";
import { ITemplateService } from "../services/interfaces/template.interface";

@injectable()
export class TemplateController implements ITemplateController {
    constructor(@inject(Symbols.ITemplateService) private readonly service: ITemplateService) {}

    public getTemplates = (req: Request, res: Response): void => {

        try {

            const templates = this.service.getTemplatesPage();
    
            res.status(200).json(templates);
        } catch (err: any) {
            console.log(err.message)
            res.status(500).json({ error: err.message });
        }
    }
}