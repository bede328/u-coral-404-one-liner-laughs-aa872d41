// One-Liner Laughs — entry writer.
// Writes a single funny line to /output/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The museum guard followed me for an hour because my jacket matched the 'Do Not Touch' exhibit.";

// Gate guard: 1–200 code points, not only whitespace, exactly one line.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry length ${codePoints} code points, must be 1–200`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
