import express from 'express';
import { PORT } from './config.js';
import cancionRoutes from './routes/canciones.routes.js';
import cancionTagRoutes from './routes/canciones-tag.routes.js';
import tagRoutes from './routes/tags.routes.js';

const app = express();

// Usando los enrutadores
app.use('/kia_web/cancion', cancionRoutes);
app.use('/kia_web/cancionTag', cancionTagRoutes);
app.use('/kia_web/tag', tagRoutes);

app.listen(PORT);
console.log('Puerto del servidor',PORT);