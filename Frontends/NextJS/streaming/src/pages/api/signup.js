// pages/api/data.js

import clientPromise from '../../lib/Mongodb'

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Cluster55455");
  const data = req.body
  let doesExist = await db.collection('user_account').findOne({Email: data.email})
  if(!doesExist ) {
    await db.collection('user_account').insertOne({Email:  data.Email, Password: data.Password});
    res.status(201).send({ success: true });
  } else {
    res.status(409).json({ error: 'This email already existed.' });
  }
   
}
