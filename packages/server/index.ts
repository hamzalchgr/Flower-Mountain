import  express  from 'express';
import type { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app: Express = express();

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
   console.log('App is running on server 8000')
})