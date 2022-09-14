const express = require('express');

const app = express();

require('dotenv').config();

const db = require('./services/connection')(process.env.MONGO_URI.replace('dbname', 'wdd431'));

// Assign db to express so that it can be accessed from other places in the application (for example, inside a controller)
app.set('db', db);

const port = process.env.PORT || 3000;

app.listen(port);

// Get all of the controller functions
const controllers = require('./controllers/index');

// Get all of the routes
const routes = require('./routes/index');

routes.forEach(route => {
    app.get(route, controllers[route]);
});