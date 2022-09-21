module.exports = function (parameters) {
    return {
        get: async function (request, response) {
            const contacts = [];

            await parameters.db.collection("contacts").find().forEach(function (contact) {
                contacts.push(contact);
            });

            response.send(contacts);
        },
        post: async function (request, response) {
            const contact = request.body;

            if (Object.keys(contact).length === 0) {
                return response.send('No contact information sent!');
            }

            parameters.db.collection("contacts").insertOne(contact, function (error, result) {
                if (error) {
                    return response.send("Insert failed");
                }

                // Returns an hexadecimal number as a string
                return response.status(201).send(result.insertedId.toString());
            });
        },
    };
};