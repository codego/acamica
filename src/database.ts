import config from './config'
import "reflect-metadata";
import {ConnectionOptions, createConnection} from "typeorm";

const connectionOptions: ConnectionOptions = {
    // name: "default",
    type: config.get("database.type"),
    logging: false,
    host: config.get("database.host"),
    port: config.get("database.port"),
    username: config.get("database.username"),
    password: config.get("database.password"),
    database: config.get("database.database"),
    entities: [__dirname + "/entities/**/*.js"],
    synchronize: true
};

export default createConnection(connectionOptions)
