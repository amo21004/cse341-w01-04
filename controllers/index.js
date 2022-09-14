module.exports = {
    '/': function (req, res) {
        const url = require('url');

        const queryObject = url.parse(req.url, true).query;

        let name;

        if (queryObject.name) {
            name = queryObject.name;
        }
        else {
            name = 'Afreen Amoodi';
        }

        res.send(name);
    },
    '/contacts': async function (req, res) {
        const db = req.app.get('db');

        const dbo = db.db("wdd431");

        const contacts = [];

        await dbo.collection('contacts').find({}).forEach(function (contact) {
            contacts.push(contact);
        });

        res.setHeader('content-type', 'application/json');

        res.send(contacts);
    }
}