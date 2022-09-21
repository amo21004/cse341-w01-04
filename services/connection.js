module.exports = function (uri, mc) {
    const client = new mc.MongoClient(uri);

    const dbo = client.db('wdd431');

    return [dbo, mc.ObjectId];
};