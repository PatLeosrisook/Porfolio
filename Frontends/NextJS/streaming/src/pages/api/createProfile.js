// pages/api/data.js

import clientPromise from '../../lib/Mongodb'

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Cluster55455");
  let data = req.body
  let doesExist = await db.collection('user_account').findOne({username: data.username})
  if(doesExist) {
    // already have that username 
    res.status(409).json({error: "Username existed, try another one."})
  } else {
    let result = await db.collection("user_account").updateOne({Email: data.email}, {$set : {username: data.username, name: data.name}}, {upsert: true})
    res.status(200).json({message: "Account created", result: result})
  }
  
}
