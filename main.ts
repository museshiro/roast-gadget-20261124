// One-Line Roast: The Gadget You Use Every Day
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no clock, no randomness, no environment reads beyond the output dir.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My toothbrush app gave my brushing a C+ and told me to floss more — I bought a toothbrush, it hired itself as my dentist.";

const charCount = [...LINE].length; // code points, matching the gate's UTF-8 character count
if (charCount > 200) {
  throw new Error(`line is ${charCount} characters, over the 200 limit`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
