import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: a burst boiler at 6am, a plumber tearing the floor up,
// and a gamer stuck at home all morning. Specific, boring, hurried,
// and almost believable — no wild story, no setup, no signature.
const excuse =
  "Sorry, my boiler burst at 6am and the plumber's ripping the floor up, I'll be stuck here all morning";

// The gate refuses anything over 20 words or outside 1–140 characters,
// so verify the line before writing it out.
const words = excuse.trim().split(/\s+/);
if (words.length > 20) {
  throw new Error(`excuse is ${words.length} words, over the 20-word limit`);
}
if (excuse.length < 1 || excuse.length > 140) {
  throw new Error(`excuse is ${excuse.length} characters, outside 1–140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
