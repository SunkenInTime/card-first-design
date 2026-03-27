import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(
  __dirname,
  "..",
  ".cursor",
  "skills",
  "lore-accurate-frontend-design"
);
const dest = path.join(__dirname, "lore-accurate-frontend-design");

if (!fs.existsSync(source)) {
  console.error("Missing source skill directory:", source);
  process.exit(1);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(source, dest, { recursive: true });
console.log("Synced", source, "->", dest);
