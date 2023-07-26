import 'reflect-metadata';
import templates from '../../data/templates.json';
import {createResponse, createRequest } from 'node-mocks-http';
import { ITemplateService } from '../services/interfaces/template.interface';
import { TemplateController } from './template.controller';
import { json } from 'stream/consumers';

const response = createResponse();
const request = createRequest();

describe("Testing the template controller", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("testing the get", () => {
       const service: ITemplateService = {
        getTemplatesPage() {
            return templates;
        }
       };
       const spyStatus = jest.spyOn(response, "status");
       const spyJson = jest.spyOn(response, "json");
       const controller = new TemplateController(service);

       controller.getTemplates(request, response);

       expect(spyStatus).toHaveBeenCalledWith(200);
       expect(spyJson).toHaveBeenCalledWith(templates);
    });
    
    test("testing when I get an error", () => {
        const errorMessage = "There was an error";
        const service: ITemplateService = {
         getTemplatesPage() {
             throw new Error(errorMessage);
         }
        };
        const spyStatus = jest.spyOn(response, "status");
        const spyJson = jest.spyOn(response, "json");
        const controller = new TemplateController(service);
 
        controller.getTemplates(request, response);
 
        expect(spyStatus).toHaveBeenCalledWith(500);
        expect(spyJson).toHaveBeenCalledWith({ error: errorMessage });
     });
});