import 'reflect-metadata';
import { TemplateService } from "./template.service";
import templates from '../../data/templates.json';

describe("Testing the template service", () => {
    test("testing the get", () => {
       const service = new TemplateService();
       const returnedTemplates = service.getTemplatesPage();

       expect(returnedTemplates).toBeTruthy();
       expect(returnedTemplates.length).toBeGreaterThan(1);
       expect(returnedTemplates.length).toEqual(templates.length);
    });
});