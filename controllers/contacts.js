module.exports = function(params) {
    return async function (req, res) {
        const contacts = [];
    
        await params.db.collection('contacts').find({}).forEach(function (contact) {
            contacts.push(contact);
        });
    
        res.setHeader('content-type', 'application/json');
    
        res.send(contacts);
    }
}