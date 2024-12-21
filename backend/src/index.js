import express from 'express';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import messageRoutes from './routes/message.route.js';
import freindRoutes from './routes/freind.route.js';
import cors from 'cors';
import { app, server } from './lib/socket.js';

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/freinds', freindRoutes);

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log('Server running on port: ', PORT);
  connectDB();
});
