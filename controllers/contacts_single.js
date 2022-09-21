module.exports = function (parameters) {
    return {
        'get': async function (request, response) {
            const id = request.params.contact_id;

            if (id.length != 24) {
                response.send('Invalid ID. Must be 24 characters long hex string');

                return;
            }

            const contact = await parameters.db.collection('contacts').findOne({ _id: parameters.objectId(id) });

            if (!contact) {
                response.send('No contact matches that ID');

                return;
            }

            response.status(200).send(contact);
        },
        'put': async function (request, response) {
            const id = request.params.contact_id;

            const contact = {
                $set: request.body
            };

            if (id.length != 24) {
                response.send('Invalid ID. Must be 24 characters long hex string');

                return;
            }

            await parameters.db.collection('contacts').updateOne({ _id: parameters.objectId(id) }, contact, function (error, result) {
                if (error) {
                    return response.send("Update failed");
                }

                return response.status(204).send(
                    "Updated contact with ID: " + id
                );
            });
        },
        'delete': async function (request, response) {
            const id = request.params.contact_id;

            if (id.length != 24) {
                response.send('Invalid ID. Must be 24 characters long hex string');

                return;
            }

            const result = await parameters.db.collection('contacts').deleteOne({ _id: parameters.objectId(id) });

            if (!result) {
                response.send('No contact matches that ID');

                return;
            }

            response.status(200).send('Deleted contact with ID:' + id);
        }
    };
};