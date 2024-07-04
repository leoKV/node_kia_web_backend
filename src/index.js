import express from 'express';
import { PORT } from './config.js';
import cancionRoutes from './routes/canciones.routes.js';

const app = express();

app.use(cancionRoutes);

app.listen(PORT);
console.log('Puerto del servidor',PORT);