import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDatabase } from './config/mongoose';
import { hospitalReportRouter } from './modules/HospitalReport';
import { hospitalReportRouter as newHospitalReportRouter } from './modules/HospitalReportNew/';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: ['*', 'http://10.3.10.12:3007', 'http://localhost:3007', 'http://localhost:5500'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true, // if you send cookies / Authorization header
};

app.use(cors(corsOptions));
// app.use(cors({ origin: 'http://127.0.0.1:5500' }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

initDatabase();

app.use('/api/v1/reports', hospitalReportRouter);
app.use('/api/v2/reports', newHospitalReportRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server running → http://localhost:${PORT}`);
})
