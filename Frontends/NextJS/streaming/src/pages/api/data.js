// pages/api/data.js

import clientPromise from '../../lib/Mongodb'

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Cluster55455");
  if (req.method === 'POST') {
    // Add data to the database
    const data = req.body
    let doesExist = await db.collection('user_account').findOne({Email: data.email})
    if(data.Type == "Signup") {
        if(!doesExist ) {
          await db.collection('user_account').insertOne({Email:  data.Email, Password: data.Password});
          res.status(201).send({ success: true });
        } else {
          res.status(409).json({ error: 'This email already existed.' });
        }

    } else if(data.Type == "Signin") {
      if(!doesExist) {
        res.status(409).json({error:"Account doesn't exist"})
      } else {
        if(doesExist.Password == req.body.Password) {
          res.status(200).json(req.body)
        } else {
          res.status(401).json({error:"Password or email incorrect"})
        }
      }
    } else if(data.Type == "CreateProfile") {
      let doesExist = await db.collection('user_account').findOne({username: data.username})
      if(doesExist) {
        // already have that username 
        res.status(409).json({error: "Username existed, try another one."})
      } else {
        let result = await db.collection("user_account").updateOne({Email: data.email}, {$set : {username: data.username, name: data.name}}, {upsert: true})
        res.status(200).json({message: "Account created", result: result})
      }
    }
  } 
}
