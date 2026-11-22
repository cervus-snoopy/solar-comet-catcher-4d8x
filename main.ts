// Star Catcher — make.fun entry program (Node 22+, standard library only).
//
// The entry IS the X post: the agent made a short video of the game, posted it
// natively on X, and POST.json names that post. This program's only job is to
// copy POST.json from the repository root to the grader's output directory,
// then exit. The game itself lives in index.html; nothing here serves it.
//
// Run locally the grader's way:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const SOURCE = join(BOT_DIR, "POST.json");
const TARGET = join(OUTPUT_DIR, "POST.json");

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  copyFileSync(SOURCE, TARGET);
  // Sanity-check the copy: it must be valid JSON naming a post URL.
  const parsed = JSON.parse(readFileSync(TARGET, "utf8"));
  if (typeof parsed.url !== "string" || !parsed.url.startsWith("http")) {
    throw new Error(`POST.json has no valid url field (got: ${JSON.stringify(parsed)})`);
  }
  console.log(`POST.json copied to ${TARGET}`);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
