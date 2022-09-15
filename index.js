const express = require('express');

const app = express();

require('dotenv').config();

const { MongoClient } = require('mongodb');

const [db, objectId] = require('./services/connection')(process.env.MONGO_URI.replace('dbname', 'wdd431'), MongoClient);

const url = require('url');

const port = process.env.PORT || 3000;

app.listen(port);

const routes = require('./routes/index');

for (const route in routes) {
    const method = routes[route].method;

    // sample extrapolation: app['get'].('/contacts', the_contacts_endpoint_controller({db, url}))
    app[method](route, routes[route].execute({
        // injecting dependencies
        'db': db,
        'url': url,
        'objectId': objectId
    }));
}