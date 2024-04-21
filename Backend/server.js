import express from 'express'
import { router } from '../Backend/Routes/index.js';
import cors from 'cors';

const app = express();
const port = 3012;

app.use (cors());
app.use (express.json());
app.use (router);

app.listen(port,() => console.log(`Servidor Rodadando!${port}`));