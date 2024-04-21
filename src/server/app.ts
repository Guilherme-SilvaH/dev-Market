import express from 'express';
import authRoutes from './routes/authRoutes';
const app = express();

app.use(express.json());

const cors = require('cors');
app.use(cors());

app.use('/api', authRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));