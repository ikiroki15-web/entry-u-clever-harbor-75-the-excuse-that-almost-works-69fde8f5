import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: a burst boiler at 6am, a plumber tearing the floor up,
// and a gamer stuck at home all morning. Specific, boring, hurried,
// and almost believable — no wild story, no setup, no signature.
const excuse =
  "Sorry, my boiler burst at 6am and the plumber's ripping the floor up, I'll be stuck here all morning";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
