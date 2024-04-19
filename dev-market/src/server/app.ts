import express from 'express';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());

app.use('/api', authRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));