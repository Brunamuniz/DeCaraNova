import express from 'express'
import { router } from '../Routes/index.js';

const app = express();
const port = 3030;

app.use (express.json());
app.use (router);

app.listen(port,() => console.log(`Servidor Rodadando!${port}`));