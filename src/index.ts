import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { PhotoEntity } from './entity/PhotoEntity';


initialize();


async function initialize() {
   

    const entityLocation: string =  "src/entity/**/*.ts";
    await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "",
        password: "",
        database: "typeorm",
        entities: [
            entityLocation
        ],
        synchronize: true,
        logging: true
    }).then(connection => {
        console.log("Connected to DB")
    }).catch(error => 
        console.log(error));

    exampeQuery();
}

async function exampeQuery() {
    await getRepository(PhotoEntity).find();
}