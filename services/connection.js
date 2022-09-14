const { MongoClient } = require('mongodb');

module.exports = function (uri) {
    const client = new MongoClient(uri);

    try {
        client.connect();
    } catch (e) {
        console.error(e);
    } finally {
        client.close();
    }

    return client;
}