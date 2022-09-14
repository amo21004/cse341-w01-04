const express = require('express');

const { MongoClient } = require('mongodb');

// The database URI is stored in the .env file, which is ignored from git
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});

main().catch(console.error);

async function main() {
    const uri = process.env.MONGO_URI;

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await listDatabases(client);
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");

    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};