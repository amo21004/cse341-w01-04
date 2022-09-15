const { MongoClient } = require('mongodb');

module.exports = function (uri) {
    const client = new MongoClient(uri);

    const dbo = client.db('wdd431');

    return dbo;
}