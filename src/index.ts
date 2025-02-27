import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { getAllIcecreams } from './database/icecream';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
  res.send('Välkommen till min sida');
});

app.get('/allicecreams', async (req: Request, res: Response) => {
  const icecreams = await getAllIcecreams();
  res.json(icecreams);
});

app.get('/icecreams', async (req: Request, res: Response) => {
  const allIcecreams = await getAllIcecreams();
  res.render('pages/index', {
    allIcecreams,
  });
});

app.listen(port, async () => {
  console.log(`Servern är uppe på http://localhost:${port}`);
});
