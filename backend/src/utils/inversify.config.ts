import { Container } from "inversify";
import "reflect-metadata";
import { ITemplateService } from "../services/interfaces/template.interface";
import { Symbols } from "./types";
import { ITemplateController } from "../controllers/interfaces/template.interface";
import { TemplateRouter } from "../routes/template.router";
import { TemplateService } from "../services/template.service";
import { TemplateController } from "../controllers/template.controller";

export const container = new Container();

container.bind<ITemplateService>(Symbols.ITemplateService).to(TemplateService);
container.bind<ITemplateController>(Symbols.ITemplateController).to(TemplateController);
container.bind<TemplateRouter>(TemplateRouter).toSelf();