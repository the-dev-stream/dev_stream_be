import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import env from './infra/env';

const app = express();

app.use(cors({
  origin: env.origin,
}));

app.use(express.json());
app.use(morgan('dev'));

app.get('/v', (req, res) => {
  res.send('Application is running');
});

export { app };