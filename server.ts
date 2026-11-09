import express from 'express';
import { db } from './src/db';
import { users } from './src/db/schema';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/users', async (req, res) => {
  try {
    const allUsers = await db.select().from(users);
    res.json(allUsers);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Endpoint to list and provide all project source code files for Google Drive export
app.get('/api/project-tree', async (req, res) => {
  try {
    const fs = await import('fs/promises');
    const projectFiles: { path: string; content: string; mimeType: string }[] = [];

    // Helper to get mime type
    const getMime = (filePath: string) => {
      if (filePath.endsWith('.json')) return 'application/json';
      if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) return 'text/typescript';
      if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) return 'text/javascript';
      if (filePath.endsWith('.html')) return 'text/html';
      if (filePath.endsWith('.css')) return 'text/css';
      if (filePath.endsWith('.md')) return 'text/markdown';
      if (filePath.endsWith('.sh')) return 'text/x-shellscript';
      return 'text/plain';
    };

    // Recursive reader
    async function readDirectory(dir: string, baseRelative = '') {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        const relPath = baseRelative ? `${baseRelative}/${entry.name}` : entry.name;

        // Skip ignored directories
        if (
          entry.name === 'node_modules' ||
          entry.name === 'dist' ||
          entry.name === '.git' ||
          entry.name === '.aistudio' ||
          entry.name === 'bun.lock' ||
          entry.name.endsWith('.tar.gz') ||
          entry.name.endsWith('.zip')
        ) {
          continue;
        }

        if (entry.isDirectory()) {
          await readDirectory(fullPath, relPath);
        } else if (entry.isFile()) {
          // Read text files up to 2MB
          try {
            const stat = await fs.stat(fullPath);
            if (stat.size < 2 * 1024 * 1024) {
              const content = await fs.readFile(fullPath, 'utf-8');
              projectFiles.push({
                path: relPath,
                content,
                mimeType: getMime(relPath),
              });
            }
          } catch {
            // Skip unreadable binary files in tree
          }
        }
      }
    }

    await readDirectory(__dirname);
    res.json({ files: projectFiles });
  } catch (error: any) {
    console.error('Error compiling project tree:', error);
    res.status(500).json({ error: error.message || 'Failed to read project tree' });
  }
});

// Serve static files from the Vite build directory
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

