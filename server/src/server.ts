import express, { Request, Response } from 'express'; // ✅ Importeer de types
const app = express();
const port = 3000;

// Typed route handler
app.get('/api/health', (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});
