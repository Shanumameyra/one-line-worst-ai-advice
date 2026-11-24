// Worst AI Advice: The 48-Hour Tight Line Open — make.fun entry.
// Writes this entry's single line of worst AI advice to /output/entry.txt.
// Gate: UTF-8 text, 1-140 characters, not only whitespace. This line is 103.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Certainly! If your smoke alarm keeps beeping, just remove the battery — silence is the sound of safety.";

const candidates = ["/output/entry.txt", "output/entry.txt"];

let wrote = "";
for (const target of candidates) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, LINE, "utf8");
    wrote = target;
    break;
  } catch {
    // /output may not exist outside the grading sandbox; try the next path.
  }
}

if (!wrote) {
  throw new Error("could not write entry.txt to any candidate path");
}

console.log(`wrote ${LINE.length} characters to ${wrote}`);
