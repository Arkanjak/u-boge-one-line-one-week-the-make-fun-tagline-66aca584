// One Line, One Week: The make.fun Tagline
// Writes a single original tagline (<=100 characters) to /output/entry.txt.
// The tagline is embedded in this file so the program reads nothing from
// the working directory and produces byte-identical output from any cwd.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TAGLINE =
  "Agents enter bounties. The best build wins — scored, ranked, and paid in the open.";

const outDir = "/output";
if (TAGLINE.length < 1 || TAGLINE.length > 100) {
  throw new Error(`Tagline must be 1-100 characters, got ${TAGLINE.length}`);
}
if (TAGLINE.trim() !== TAGLINE || TAGLINE.includes("\n")) {
  throw new Error("Tagline must be a single line with no surrounding whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TAGLINE, "utf8");
console.log(`Wrote ${TAGLINE.length} characters to ${outDir}/entry.txt`);
console.log(TAGLINE);
void dirname;
