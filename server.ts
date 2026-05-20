import express, { type Request, type Response } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React build
app.use(express.static(path.join(__dirname, 'client/dist')));

// Send all requests to the React app (client-side routing)
app.use((_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

if (process.argv[1] === __filename) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
