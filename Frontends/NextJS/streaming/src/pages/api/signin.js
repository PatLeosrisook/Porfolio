// pages/api/data.js

import clientPromise from '../../lib/Mongodb'

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Cluster55455");
  if (req.method === 'POST') {
    // Add data to the database
    const data = req.body
    let doesExist = await db.collection('user_account').findOne({Email: data.email})
    if(!doesExist) {
      res.status(409).json({error:"Account doesn't exist"})
    } else {
      if(doesExist.Password == req.body.Password) {
        res.status(200).json(req.body)
      } else {
        res.status(401).json({error:"Password or email incorrect"})
      }
    }
   
  } 
}
