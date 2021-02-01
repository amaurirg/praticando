import express from 'express';
import { helloworld } from './routes/routes';


const app = express();

app.get('/', helloworld);

app.listen(3333);
