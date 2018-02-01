import Hapi from "hapi";
import Joi from "joi";

const server = new Hapi.Server({ 
    "host": "localhost",
    "port": 3000
});

server.start(error => {
    if(error) {
        throw error;
    }
    console.log("Listening at " + server.info.uri);
});

server.route({
    method: "GET", path: "/",
    handler: (request, response) => {
        return "Hello World";
    }
});
