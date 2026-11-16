import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SOURCE_FILE = "entry.png";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (!existsSync(SOURCE_FILE)) {
  console.error(`Error: ${SOURCE_FILE} not found in the current directory.`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

const destination = join(OUTPUT_DIR, "entry.png");
copyFileSync(SOURCE_FILE, destination);
console.log(`Copied ${SOURCE_FILE} to ${destination}`);
