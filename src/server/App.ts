import express from 'express';

import routes from "../routes/routes";
import errorView from "../views/error_view";
import {InternalServerError, NotFoundError} from "../errors";
import {NextFunction, Request, Response} from "express-serve-static-core";
import path from "path";
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

class App {
    private readonly app: express.Application

    constructor() {
        this.app = express()
        this.globalMiddlewares()
        this.mountRoutes()
        this.errorHandling()
        this.views()
    }

    private globalMiddlewares() {
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
        this.app.use(methodOverride());
    }

    private mountRoutes() {
        this.app.use(express.static(path.join(__dirname, '../public')))
        this.app.use("/", routes);
    }

    public errorHandling() {
        console.log("configure_error_handlers", {message: "Configuring error handlers"});

        this.app.use((req, res, next) => {
            res.status(404)
                .json(errorView(new NotFoundError()));
        });

        this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            return res.status(500)
                .json(errorView(new InternalServerError(err)));
        });
    }

    public views() {
        this.app.set('views', path.join(__dirname, '../views'))
        this.app.set('view engine', 'ejs')
    }

    get(): express.Application {
        return this.app;
    }
}

export default new App().get()
