module.exports = function(params) {
    return async function (req, res) {
        const ObjectId = require('mongodb').ObjectId;

        const id = req.params[0];

        const contact = await params.db.collection('contacts').findOne({_id: params.objectId(id)});
    
        res.setHeader('content-type', 'application/json');
    
        res.send(contact);
    }
}