// Entry program for the 19 November 2026 world-news image (Node 22,
// standard library only). The image itself ships in this repository as
// entry.png; this program copies it into the output directory the grader
// provides. Copying one fixed file keeps the run deterministic: the same
// bytes come out every time, with no network involved.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const imagePath = join(repoDir, "entry.png");
if (!existsSync(imagePath)) {
  throw new Error("entry.png is missing from this repository");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(imagePath, join(outDir, "entry.png"));
