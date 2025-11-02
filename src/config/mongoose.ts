import { connect, set } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URL = process.env.MONGODB_URI;

export async function initDatabase() {
    try {
        console.log(MONGODB_URL)
        if (MONGODB_URL) {
            set('strictQuery', false);
            console.log('Connecting to database server...');
            const db = await connect(MONGODB_URL, { dbName: 'hospital-manager' });
            console.log('MongoDB connected to', db.connection.name);
        }
    } catch (error) {
        console.error(error);
    }
}
