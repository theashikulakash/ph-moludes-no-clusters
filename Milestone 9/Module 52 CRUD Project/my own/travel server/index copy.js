// const dns = require("node:dns");
// dns.setServers(['8.8.8.8', '8.8.4.4']);
// const express = require('express');
// const cors = require("cors");
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const dotenv = require('dotenv');
// const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");
// dotenv.config();

// const uri = process.env.VIBE_TREK_URI;
// const app = express();
// const PORT = process.env.PORT || 4040;

// // ADD THESE TWO MIDDLEWARES
// app.use(cors());
// app.use(express.json()); // <--- 1. Essential to read req.body from frontend

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// // jwt token verify
// const JWKS = createRemoteJWKSet(new URL(`${process.env.CLIENT_URL}/api/auth/jwks`))



// const verifyToken = async (req, res, next) => {
//     const authHeader = req.headers.authorization

//     console.log(authHeader)

//     if (!authHeader) {
//         return res.status(401).json({
//             message: "Unauthorized"
//         });
//     }
//     const token = authHeader.split(" ")[1];
//     if (!token) {
//         return res.status(401).json({
//             message: "Unauthorized"
//         });
//     }

//     try{
//      const {payload} = await jwtVerify(token, JWKS)
//     console.log(payload)   
//     } catch {
//         return res.status(403).json({
//             message: "Forbidden"
//         });
//     }

    

//     next()
// }


// async function run() {
//     try {
//         // await client.connect();
//         const db = client.db("vibetrek");
//         const destinationCollection = db.collection("destination");

//         // get all destination data
//         app.get("/destination", async (req, res) => {
//             const result = await destinationCollection.find().toArray();
//             res.json(result);
//         });

//         // destination id wise single data (API)
//         app.get("/destination/:id", verifyToken, async (req, res) => {
//             const { id } = req.params

//             const result = await destinationCollection.findOne({ _id: new ObjectId(id) });
//             res.json(result);
//         })

//         // update data in destinations (API)
//         app.patch("/destination/:id", async (req, res) => {
//             const { id } = req.params
//             const updatedData = req.body

//             const result = destinationCollection.updateOne(
//                 { _id: new ObjectId(id) },
//                 { $set: updatedData }
//             )

//             res.json(result);
//         })


//         // middlewear

//         // delete destination from db (API)
//         app.delete('/destination/:id', async (req, res) => {
//             const { id } = req.params;
//             const result = await destinationCollection.deleteOne({
//                 _id: new ObjectId(id),
//             });
//             res.json(result);
//         })


//         // add-destination form data insert (API)
//         app.post('/destination', async (req, res) => {
//             const destinationData = req.body; // Now this won't be undefined
//             console.log(destinationData);

//             const result = await destinationCollection.insertOne(destinationData);
//             res.send(result);
//         });

//         // ===== BOOKINGS ENDPOINTS =====
//         const bookingCollection = db.collection("bookings");

//         // create a booking (API)
//         app.post('/bookings', async (req, res) => {
//             try {
//                 const bookingData = req.body;
//                 console.log('Booking data received:', bookingData);

//                 // Validate required fields
//                 if (!bookingData.userId || !bookingData.destinationId || !bookingData.date || !bookingData.guests) {
//                     return res.status(400).json({ message: 'Missing required fields' });
//                 }

//                 // Insert booking into database
//                 const result = await bookingCollection.insertOne({
//                     ...bookingData,
//                     createdAt: new Date()
//                 });

//                 res.status(201).json({
//                     message: 'Booking created successfully!',
//                     bookingId: result.insertedId
//                 });
//             } catch (error) {
//                 console.error('Booking error:', error);
//                 res.status(500).json({ message: error.message });
//             }
//         });

//         // get all bookings (API)
//         app.get('/bookings', async (req, res) => {
//             try {
//                 const result = await bookingCollection.find().toArray();
//                 res.json(result);
//             } catch (error) {
//                 res.status(500).json({ message: error.message });
//             }
//         });

//         // get bookings by user ID (API)
//         app.get('/bookings/user/:userId', async (req, res) => {
//             try {
//                 const { userId } = req.params;
//                 const result = await bookingCollection.find({ userId }).toArray();
//                 res.json(result);
//             } catch (error) {
//                 res.status(500).json({ message: error.message });
//             }
//         });

//         // delete booking (API)
//         app.delete('/bookings/:id', async (req, res) => {
//             try {
//                 const { id } = req.params;
//                 const result = await bookingCollection.deleteOne({ _id: new ObjectId(id) });
//                 res.json(result);
//             } catch (error) {
//                 res.status(500).json({ message: error.message });
//             }
//         });







//         // await client.db("admin").command({ ping: 1 });
//         console.log("✅ Connected to MongoDB!");

//     } catch (error) {
//         console.error("Connection error:", error);
//     }
//     // 2. DELETED client.close() from here. 
//     // If you close it, the POST request will fail later!
// }
// run().catch(console.dir);

// app.get('/', (req, res) => {
//     res.send("server is running well!")
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


