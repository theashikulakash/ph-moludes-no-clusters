<!-- const dns = require('node:dns');
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
const { createRemoteJWKSet, jwtVerify } = require('jose-cjs');

dotenv.config();

dns.setServers(['8.8.8.8', '8.8.4.4']);

const uri = process.env.VIBE_TREK_URI;
if (!uri) {
  throw new Error('Missing VIBE_TREK_URI environment variable');
}

const clientUrl = process.env.CLIENT_URL;
const JWKS = clientUrl ? createRemoteJWKSet(new URL(`${clientUrl}/api/auth/jwks`)) : null;

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (!JWKS) {
    return res.status(500).json({ message: 'JWT verification is not configured' });
  }

  try {
    await jwtVerify(token, JWKS);
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Forbidden' });
  }
};

async function run() {
  try {
    await client.connect();
    const db = client.db('vibetrek');
    const destinationCollection = db.collection('destination');
    const bookingCollection = db.collection('bookings');

    app.get('/destination', async (req, res) => {
      const result = await destinationCollection.find().toArray();
      res.json(result);
    });

    app.get('/destination/:id', verifyToken, async (req, res) => {
      const { id } = req.params;
      const result = await destinationCollection.findOne({ _id: new ObjectId(id) });
      res.json(result);
    });

    app.patch('/destination/:id', async (req, res) => {
      const { id } = req.params;
      const updatedData = req.body;

      const result = await destinationCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData }
      );

      res.json(result);
    });

    app.delete('/destination/:id', async (req, res) => {
      const { id } = req.params;
      const result = await destinationCollection.deleteOne({ _id: new ObjectId(id) });
      res.json(result);
    });

    app.post('/destination', async (req, res) => {
      const destinationData = req.body;
      const result = await destinationCollection.insertOne(destinationData);
      res.send(result);
    });

    app.post('/bookings', async (req, res) => {
      try {
        const bookingData = req.body;
        if (!bookingData.userId || !bookingData.destinationId || !bookingData.date || !bookingData.guests) {
          return res.status(400).json({ message: 'Missing required fields' });
        }

        const result = await bookingCollection.insertOne({
          ...bookingData,
          createdAt: new Date(),
        });

        res.status(201).json({
          message: 'Booking created successfully!',
          bookingId: result.insertedId,
        });
      } catch (error) {
        console.error('Booking error:', error);
        res.status(500).json({ message: error.message });
      }
    });

    app.get('/bookings', async (req, res) => {
      try {
        const result = await bookingCollection.find().toArray();
        res.json(result);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.get('/bookings/user/:userId', async (req, res) => {
      try {
        const { userId } = req.params;
        const result = await bookingCollection.find({ userId }).toArray();
        res.json(result);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.delete('/bookings/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const result = await bookingCollection.deleteOne({ _id: new ObjectId(id) });
        res.json(result);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    console.log('✅ Connected to MongoDB!');
  } catch (error) {
    console.error('Connection error:', error);
    throw error;
  }
}

run().catch((error) => {
  console.error('Startup error:', error);
});

app.get('/', (req, res) => {
  res.send('server is running well!');
});

module.exports = app; -->



































