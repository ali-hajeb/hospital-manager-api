import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDatabase } from './config/mongoose';
import { hospitalReportRouter } from './modules/HospitalReport';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

initDatabase();

app.use('/api/v1/reports', hospitalReportRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server running → http://localhost:${PORT}`);
})
