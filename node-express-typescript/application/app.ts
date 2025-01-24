import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
const port = process.env.PORT || 8000;
const app = express()
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});


export default app