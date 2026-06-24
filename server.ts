import express, { type Request, type Response } from 'express';
import path from 'node:path';

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the React build
// Use import.meta.dir (Bun-specific) to get runtime directory, then go up to project root
const projectRoot = path.join(import.meta.dir, '..');
const clientDistPath = path.join(projectRoot, 'client/dist');
app.use(express.static(clientDistPath));

// Send all requests to the React app (client-side routing)
app.use((_req: Request, res: Response) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

// Start server when run directly (not imported)
if (import.meta.main) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
