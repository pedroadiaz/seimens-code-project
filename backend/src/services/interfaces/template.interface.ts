import { Template } from "../../models/template";

export interface ITemplateService {
    getTemplatesPage() : Template[]
}