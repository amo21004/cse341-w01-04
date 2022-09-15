module.exports = function (uri, mc) {
    const client = new mc(uri);

    const dbo = client.db('wdd431');

    return [dbo, require('mongodb').ObjectId];
}