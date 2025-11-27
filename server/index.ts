import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Serve the React app
app.use(express.static(path.join(__dirname, "../dist")));

// Handle all routes (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve the built React app
app.use(express.static(join(__dirname, "..", "dist")));

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "..", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Future Proofer LIVE at https://future-proofer.onrender.com 🚀`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
