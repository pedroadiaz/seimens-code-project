import { Router } from "express";
import { inject, injectable } from "inversify";
import { ITemplateController } from "../controllers/interfaces/template.interface";
import { Symbols } from "../utils/types";

@injectable()
export class TemplateRouter {
    public router = Router();
    public path = "/templates";

    constructor(@inject(Symbols.ITemplateController) private controller: ITemplateController) {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('', this.controller.getTemplates);
    }
}