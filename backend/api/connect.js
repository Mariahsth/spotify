import { MongoClient } from "mongodb";
 

const URI="mongodb+srv://admin:admin123@cluster1.rw4pc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const client= new MongoClient(URI);


export const db=client.db("Spotify");

// const songCollection= await db.collection('songs').find({}).toArray();

// console.log(songCollection)