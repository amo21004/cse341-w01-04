const express = require('express');

const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port);

const cors = require('cors');

app.use(cors());

const MongoClient = require('mongodb');

const [db, objectId] = require('./services/connection')(process.env.MONGO_URI.replace('dbname', 'wdd431'), MongoClient);

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const url = require('url');

const routes = require('./routes/index');

for (const route in routes) {
    const method = routes[route].method;

    // dependencies to inject as an object
    const dependencies = {
        'db': db,
        'url': url,
        'objectId': objectId
    };

    // method can either be a string or an array of strings
    if (Array.isArray(method)) {
        for (const current_method of method) {
            // sample extrapolation: app['get'].('/contacts', the_contacts_endpoint_controller(dependencies)[get])
            app[current_method](route, routes[route].execute(dependencies)[current_method]);
        }
    }
    else {
        // sample extrapolation: app['get'].('/contacts', the_contacts_endpoint_controller(dependencies))
        app[method](route, routes[route].execute(dependencies));
    }
}