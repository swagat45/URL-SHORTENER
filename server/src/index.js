import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import urlRoutes from './routes/urlRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', urlRoutes);

const PORT = process.env.PORT || 8080;
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      autoIndex: true,
    });
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on :${PORT}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();