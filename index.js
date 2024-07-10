import express from 'express';
import cors from 'cors';
import { PORT } from './src/config.js';
import cancionRoutes from './src/routes/canciones.routes.js';
import cancionTagRoutes from './src/routes/canciones-tag.routes.js';
import tagRoutes from './src/routes/tags.routes.js';

const app = express();

// Configurando CORS para permitir las solicitudes
app.use(cors());

// Usando los enrutadores
app.use('/kia_web/cancion', cancionRoutes);
app.use('/kia_web/cancionTag', cancionTagRoutes);
app.use('/kia_web/tag', tagRoutes);

app.listen(PORT);
console.log('Puerto del servidor',PORT);