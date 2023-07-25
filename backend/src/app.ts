import express, { Application, Router } from "express";
import { container } from './utils/inversify.config';
import { TemplateRouter } from "./routes/template.router";

const app: Application = express();

const port = 5000;

app.use(express.json());

export const routes = Router();

const templateRoutes = container.resolve<TemplateRouter>(TemplateRouter);

routes.use(templateRoutes.path, templateRoutes.router);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use(routes);

app.listen(port, () => console.log("Hola!"));