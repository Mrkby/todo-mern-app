import express, { urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import TodoRoutes from './routers/todoRouters.js'


const app = express()

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connection successfully')

    } catch (err) {
        console.error('Database connection error:', err)
    }

}
connectDB()

app.use(cors())
app.use(express.json())
app.use(urlencoded())

app.use('/api', TodoRoutes)

app.listen(3001, () => {
    console.log(`server connected http://localhost:3001 `);
})