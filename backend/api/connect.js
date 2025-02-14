import { MongoClient } from "mongodb";
import 'dotenv/config';
 

const URI=process.env.STRING_CONEXAO;

const client= new MongoClient(URI);


export const db=client.db("Spotify");

// const songCollection= await db.collection('songs').find({}).toArray();

// console.log(songCollection)