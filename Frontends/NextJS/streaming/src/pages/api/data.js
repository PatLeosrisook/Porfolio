// pages/api/data.js

import clientPromise from '../../lib/Mongodb'

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Cluster55455");

  if (req.method === 'POST') {
    // Add data to the database
    const data = req.body;
    await db.collection('user_account').insertOne(data);
    res.status(201).send({ success: true });
  } else if (req.method === 'GET') {
    // Retrieve data from the database
    const data = await db.collection('user_account').find({}).toArray();
    res.status(200).json(data);
  }
}
