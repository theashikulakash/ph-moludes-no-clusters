const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://qualitygroupjsr_db_user:q1M8c8wKKu6aUIWr@clusterqfs.6z1p52f.mongodb.net/?appName=ClusterQFS";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


const run = async () => {
    try {
        await client.connect();

        const db = client.db('QFS_Order');
        const usersCollection = db.collection('QFSOrder');

        app.get('/users', async(req, res) => {
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        await client.db("admin").command({ping: 1});
        console.log('Pinged your deployment.')
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Get / Working');
})

app.listen(port, () => {
    console.log(`Working Port is: ${port}`);
})

