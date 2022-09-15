module.exports = function (uri, MongoClient) {
    const client = new MongoClient(uri);

    const dbo = client.db('wdd431');

    return [dbo, require('mongodb').ObjectId];
}