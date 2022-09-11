const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port);

const controllers = require('./controllers/index');

const routes = require('./routes/index');

routes.forEach(route => {
    const controller = controllers[route];

    app.get(route, controller);
});