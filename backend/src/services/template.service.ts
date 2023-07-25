import { injectable } from 'inversify';
import { ITemplateService } from './interfaces/template.interface';
import templates from '../../data/templates.json';
import { Template } from '../models/template';

@injectable()
export class TemplateService implements ITemplateService {
    getTemplatesPage(): Template[] {
        return templates as Template[];
    }
}